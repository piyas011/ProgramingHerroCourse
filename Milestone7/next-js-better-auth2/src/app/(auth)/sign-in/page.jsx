"use client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import React, { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    console.log(resData, error);
  };

  const handelGoogleSignIn = async () => {
    const resData = await signIn.social({
      provider: "google",
    });
  };

  const handelGithubSignIn = async () => {
    const resData = await signIn.social({
      provider: "github",
    });
  };

  const handelDiscordSignIn = async () => {
    const resData = await signIn.social({
      provider: "discord",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 bg-amber-200">
      <h1>Sign In Page</h1>
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField className="w-full max-w-70" name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full max-w-70"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pe-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            {/* <Check /> */}
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div>
          <Button onClick={handelGoogleSignIn}> Continue With Google</Button>
        </div>
        <div>
          <Button onClick={handelGithubSignIn}> Continue With GitHub</Button>
        </div>
        <div>
          <Button onClick={handelDiscordSignIn}> Continue With Discord</Button>
        </div>
        <div>
          <Link href="/forgot-password">forget password ?</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
