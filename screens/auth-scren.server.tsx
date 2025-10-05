import AuthForm from "@/forms/auth/auth-form.client";
import Image from "next/image";

const AuthScreen = () => {
  return (
    <main>
      <div className="flex gap-4 items-center">
        <Image
          src={"/asset-auth-01.jpg"}
          alt="Auth background image"
          width={500}
          height={600}
          className="w-1/2 h-dvh rounded-md"
        />
        <AuthForm />
      </div>
    </main>
  );
};

export default AuthScreen;
