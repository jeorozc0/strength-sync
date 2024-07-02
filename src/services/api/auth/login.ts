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

  if (error) {
    console.log(error.message);
  }

  redirect("/");
}

export async function handleSignInWithOAuth(provider: "google") {
  const url = "http://localhost:5173/routine";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: url,
    },
  });

  if (data?.url) {
    console.log(data.url);
    redirect(data.url);
  } else if (error) {
    console.error("OAuth sign-in error:", error);
  }
}

export async function signUpNewUser(data: z.infer<typeof signUpSchema>) {

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
      },
    },
  });

  if (error) {
    redirect("/error");
  }
  redirect("/");
}
