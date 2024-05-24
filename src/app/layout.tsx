import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Marroquin Laser Designs",
  description: "Custom Artwork & Handmade",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <Navbar />
          {children}</TRPCReactProvider>
      </body>
    </html>
  );
}
