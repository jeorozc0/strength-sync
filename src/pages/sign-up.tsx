import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase/supabase";
import { AuthWrapper } from "../components/auth-wrapper";
import { SignUpForm } from "../components/auth/signup-form";

export function SignUp() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/");
    }
  });

  return (
    <AuthWrapper>
      <SignUpForm />
    </AuthWrapper>
  );
}
