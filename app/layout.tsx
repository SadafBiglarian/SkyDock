import "@/app/globals.css";
import Footer from "@/components/layouts/footer/footer";
import Header from "@/components/layouts/header/header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkyDock",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir min-h-screen flex flex-col ">
     {children}
      </body>
    </html>
  );
}
