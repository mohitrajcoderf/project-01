import type { Metadata } from "next";
import "./globals.css";
import { onset } from "@/lib/fonts";
import Footer from "@/components/core-ui/footer";

export const metadata: Metadata = {
  title: "Create Your Own Wallpaper",
  description:
   "simple wallpaper app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${onset.variable} antialiased min-h-screen bg-background`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}