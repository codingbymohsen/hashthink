import { ReactNode } from "react";

import type { Metadata } from "next";

import { Header, Menu } from "@/components/layouts";
import { cn } from "@/utils/cn";
import { poppins } from "@/utils/fonts";

import "@/styles/globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Developed by MrMeshky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={cn("bg-primary-darker flex antialiased", poppins.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
