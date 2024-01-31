import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { login } from "~/lib/api";
import { getUser } from "~/lib/api/user";
import { userAtom } from "~/lib/state/atoms";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

export default function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const [, setUser] = useAtom(userAtom); 
  const mutation = useMutation(login, {
    onSuccess: async () => {
      const user = await getUser();
      setUser(user);
      void router.push("/home");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    mutation.mutate(data);
  }

  return (
    <Card className="m-auto mt-40 w-1/4">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>sign into your Taskforce accout</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      type="email"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your password"
                      type="password"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button onClick={form.handleSubmit(onSubmit)}>Login</Button>
      </CardFooter>
    </Card>
  );
}
