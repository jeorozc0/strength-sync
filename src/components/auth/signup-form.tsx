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
import { Link } from "react-router-dom";
import { signUpNewUser } from "../../services/api/auth/login";

const formSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  password: z.string(),
});

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    signUpNewUser(data);
    console.log(data);
  }

  return (
    <div className="w-full h-fit">
      <div className="flex h-fit justify-center items-center my-14 text-4xl font-medium text-center">
        <h2>Join StrengthSync</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormControl className="mb-4">
                  <input
                    placeholder="First Name"
                    type="text"
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
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormControl className="mb-4">
                  <input
                    placeholder="Last Name"
                    type="text"
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
              <FormItem>
                <FormControl className="mb-4">
                  <input
                    placeholder="Password"
                    type="password"
                    required
                    {...field}
                    className="w-full h-16 border border-solid border-[#e5e7eb] dark:border-black bg-white dark:bg-[#2B2C32] rounded-md text-black p-5 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="flex w-full h-16 justify-center items-center border-2 border-[#ECEDF0] dark:border-black text-black gap-4 rounded-md text-md font-normal dark:text-white leading-6 bg-white dark:bg-[#2B2C32] hover:bg-[#F9FAFB] dark:hover:bg-[#353740]"
          >
            Join
          </button>
          <div className="flex w-full justify-center mt-4">
            <p>
              Already a member? &nbsp;
              <span>
                <Link to={"/login"} className={"font-bold hover:underline"}>
                  Log in
                </Link>
              </span>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
