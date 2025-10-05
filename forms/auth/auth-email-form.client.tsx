"use client";

import AuthLoginEmailForm from "@/forms/auth/auth-login-email-form.client";
import AuthSignupEmailForm from "@/forms/auth/auth-signup-email-form.client";
import { MouseEventHandler, useState } from "react";

const AuthEmailForm = () => {
  const [isNewUser, setIsNewUser] = useState(false);

  const handleOnClickCreateUser: MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();

    setIsNewUser(!isNewUser);
  };

  return (
    <form className="w-full">
      {isNewUser ? <AuthSignupEmailForm /> : <AuthLoginEmailForm />}

      <p className="text-sm text-center">
        New here?{" "}
        <span
          className="underline cursor-pointer"
          onClick={handleOnClickCreateUser}
        >
          {" "}
          Create an account
        </span>{" "}
        using email
      </p>
    </form>
  );
};

export default AuthEmailForm;
