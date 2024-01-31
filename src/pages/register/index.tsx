import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  name: z.string().min(2).max(55),
  email: z.string().email(),
  password: z.string().min(8).max(32),
  confirm_password: z.string().min(8).max(32)
}) .refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="m-auto mt-40 w-1/3">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Start by creating a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="flex gap-3 items-center" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your name" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your email" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your password" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              /> <FormField
                name="confirm_password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Confirm your password" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter >
        <Button onClick={form.handleSubmit(onSubmit)}>register</Button>
      </CardFooter>
    </Card>
  );
}
