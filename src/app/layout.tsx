import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextWraper from "@/components/contextWraper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix | Best stream platform",
  description: "Platform to stream film",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ContextWraper>{children}</ContextWraper>
      </body>
    </html>
  );
}
