import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZenDM — Campaign Infrastructure for Prop Firms",
  description:
    "ZenDM helps prop firms run structured campaigns across Discord with better targeting, cleaner execution, and measurable revenue impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}