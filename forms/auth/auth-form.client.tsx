"use client";

import { Spinner } from "@/components/ui/spinner";
import AuthEmailForm from "@/forms/auth/auth-email-form.client";
import AuthGoogleLoginForm from "@/forms/auth/auth-google-login-form.client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const { status } = useSession();
  const { push } = useRouter();

  if (status === "loading")
    return (
      <div className="flex w-full justify-center items-center">
        <Spinner />
        <p>Just a moment...</p>
      </div>
    );

  if (status === "authenticated") push("/home");

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-2/3 flex flex-col gap-3">
        <p>Sign in to access your personal German vocabulary inventory</p>
        <AuthGoogleLoginForm />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or continue with email
            </span>
          </div>
        </div>

        <AuthEmailForm />
      </div>
    </div>
  );
};

export default AuthForm;
