
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextDash | Admin Dashboard",
  description: "A dynamic dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
