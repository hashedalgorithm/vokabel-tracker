"use client";

import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";

type AuthProviderProps = PropsWithChildren;

const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
