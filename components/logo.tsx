import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type LogoProps = ComponentPropsWithoutRef<"div"> & {
  variant?: "only-icon" | "full";
};

const Logo = ({ variant = "full", className, ...props }: LogoProps) => {
  return (
    <div className={cn(`flex gap-3 items-center`, className)} {...props}>
      <Image
        src={"/logo.png"}
        width={200}
        height={200}
        className="w-10 h-10 object-cover rounded-md"
        alt="Vokabel logo"
      />
      {variant === "full" && <p className="font-bold">Vokabel Tracker</p>}
    </div>
  );
};

export default Logo;
