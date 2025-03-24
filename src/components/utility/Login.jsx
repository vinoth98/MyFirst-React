import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    },
  });

  const navigate = useNavigate();

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const asyncOperation = new Promise((resolve) => {
      const username = values?.username;
      if ("Vinoth" === username) {
        console.log("Setting up Auth");
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: "Vinoth",
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    // <div>
    //   <h1 className="text-primary">Welcome My Login</h1>;
    // </div>
  );
}

export default Login;
