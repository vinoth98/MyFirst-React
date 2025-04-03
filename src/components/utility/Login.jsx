import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const asyncOperation = new Promise((resolve) => {
      const username = values?.username;
      const password = values?.password;
      if ("Vinoth" === username || "test" === password) {
        console.log("Setting up Auth");
        localStorage.setItem(
          "user",
          "password",
          JSON.stringify({
            name: "Vinoth",
            // password: "test",
            role: ["admin"],
            auth: true,
          })
        );
        resolve();
      }
    });

    asyncOperation.then(() => {
      // Navigate to another page after the async operation is complete.
      navigate("/Dashboard"); // Replace with your desired URL.
    });
  }
  return (
    <Card className={cn("w-[600px]", "h-[100%]", "p-4")}>
      <CardHeader>
        <CardTitle> Welcome My Login</CardTitle>
      </CardHeader>
      <div className="flex">
        <div className="w-3/2 space-y-8 my-3 p-6">
          {/* <h2 className="text-primary"> My portfolio</h2> */}
          <CardContent>
            This is My portfolio Using Componets,redux.
            <p>
              <span>Username:Vinoth</span>
            </p>
            <p>
              <span>Passoword:test</span>
            </p>
          </CardContent>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-4/2 space-y-8"
          >
            {/* <CardHeader>
              <CardTitle> Welcome My Login</CardTitle>
            </CardHeader> */}

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username(Vinoth)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Username" {...field} />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </Card>
  );
}

export default Login;
