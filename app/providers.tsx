
import type { ReactNode } from "react";
import { AuthProvider } from "@/context/authContext";
import PageLoader from "@/components/pageLoader";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Providers({ children }: { children: ReactNode }) {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <PageLoader />
        {children}
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
