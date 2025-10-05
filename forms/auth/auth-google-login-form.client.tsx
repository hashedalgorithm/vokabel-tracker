"use client";

import { Button } from "@/components/ui/button";
import { FieldSet } from "@/components/ui/field";
import GoogleLogo from "@/icons/google-logo";
import { signIn } from "next-auth/react";
import { MouseEventHandler } from "react";

const AuthGoogleLoginForm = () => {
  const handleOnClickGoogleAuth: MouseEventHandler<HTMLButtonElement> = () => {
    signIn("google");
  };

  return (
    <FieldSet>
      <Button onClick={handleOnClickGoogleAuth}>
        <GoogleLogo /> Login with Google
      </Button>
    </FieldSet>
  );
};

export default AuthGoogleLoginForm;
