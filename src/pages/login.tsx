import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase/supabase";

const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/");
    }
  });

  return (
    <div className="flex flex-row h-screen w-full">
      <div className="flex items-center justify-center h-full w-1/2">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="light"
          providers={["google"]}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Login;
