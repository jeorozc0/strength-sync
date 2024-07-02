import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GoogleLogo } from "../ui/google-logo";
import { Link } from "react-router-dom";
import {
  handleSignInWithOAuth,
  signInWithEmail,
} from "../../services/api/auth/login";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    signInWithEmail(data);
    console.log(data);
  }

  return (
    <div className="w-full h-fit">
      <div className="flex h-fit justify-center items-center my-14 text-4xl font-medium text-center">
        <h2>Welcome back</h2>
      </div>
      <div className="flex flex-col w-full gap-4 my-6">
        {/* TODO: This should be component. (duplication) */}
        <button
          type="button"
          className="flex w-full h-16 justify-center items-center border-2 border-[#ECEDF0] dark:border-black text-black gap-4 rounded-md text-md font-normal dark:text-white leading-6 bg-white dark:bg-[#2B2C32] hover:bg-[#F9FAFB] dark:hover:bg-[#353740]"
          onClick={() => handleSignInWithOAuth("google")}
        >
          <GoogleLogo />
          Continue with Google
        </button>
        {/* TODO: This should be component. (duplication) */}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl className="mb-4">
                  <input
                    placeholder="Email"
                    type="email"
                    required
                    {...field}
                    className="w-full h-16 border border-solid border-[#e5e7eb] dark:border-black bg-white dark:bg-[#2B2C32] rounded-md text-black p-5 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="pb-3">
                <FormControl>
                  <input
                    placeholder="Password"
                    type="password"
                    required
                    {...field}
                    className="w-full h-16  border border-solid border-[#e5e7eb] dark:border-black bg-white dark:bg-[#2B2C32] rounded-md text-black p-5 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full justify-center mt-0 my-6">
            <Link to={"/"}>
              <p className="text-sm font-medium hover:underline">
                Forgot password?
              </p>
            </Link>
          </div>
          <button
            type="submit"
            className="flex w-full h-16 justify-center items-center border-2 border-[#ECEDF0] dark:border-black text-black gap-4 rounded-md text-md font-normal dark:text-white leading-6 bg-white dark:bg-[#2B2C32] hover:bg-[#F9FAFB] dark:hover:bg-[#353740]"
          >
            Continue
          </button>
          <div className="flex w-full justify-center mt-4">
            <p>
              New to StrengthSync? &nbsp;
              <span>
                <Link to={"/signup"} className={"font-bold hover:underline"}>
                  Sign up
                </Link>
              </span>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
