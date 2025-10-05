import AuthProvider from "@/contexts/auth-provider.client";
import { QueryProvider } from "@/contexts/react-query/query-provider.client";
import { ThemeProvider } from "@/contexts/theme-provider/theme-provider.client";
import { PropsWithChildren } from "react";

type ProvidersProps = PropsWithChildren;

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};

export default Providers;
