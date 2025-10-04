import Navbar from "@/components/navbar/navbar.server";
import React, { PropsWithChildren } from "react";

type BaseLayoutProps = PropsWithChildren;

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="w-dvw h-dvh">
      <Navbar />
      {children}
    </div>
  );
};

export default BaseLayout;
