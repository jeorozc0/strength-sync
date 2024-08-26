import { z } from "zod";
import supabase from "../../supabase/supabase";
import { redirect } from "react-router-dom";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});
const signUpSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export async function signInWithEmail(data: z.infer<typeof loginSchema>) {
  const { error } = await supabase.auth.signInWithPassword(data);

  return { data, error };
}

export async function handleSignInWithOAuth(provider: "google") {
  const url = "https://www.strength-sync.com/";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: url,
    },
  });

  if (data?.url) {
    console.log(data.url);
    return redirect(data.url);
  } else if (error) {
    console.error("OAuth sign-in error:", error);
  }
}

export async function SignUpNewUser(user_data: z.infer<typeof signUpSchema>) {
  const { data, error } = await supabase.auth.signUp({
    email: user_data.email,
    password: user_data.password,
    options: {
      data: {
        first_name: user_data.first_name,
        last_name: user_data.last_name,
      },
    },
  });

  return { data, error };
}
