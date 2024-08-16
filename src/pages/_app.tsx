import type { AppProps } from "next/app";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "@/config";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { FacebookModals } from "@/components/Facebook/Modal";
import { ModalProvider } from "@/contexts/ModalProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ModalProvider>
          <Component {...pageProps} />
          <FacebookModals />
        </ModalProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
