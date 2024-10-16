import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easymed",
  description: "Easymed, o melhor jeito de se administrar sua clinica medica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="easymed.tech"
          src="https://analytics.easymed.tech/js/script.js"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
