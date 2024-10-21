import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { SiteHeader } from "@/components/header/site-header";



const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "My Static Blog",
  description: "static blog created by kithmina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${interFont.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <div className=" relative flex min-h-dvh flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
