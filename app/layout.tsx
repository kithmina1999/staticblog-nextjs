import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { SiteHeader } from "@/components/header/site-header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";



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
    <html lang="en" className="scroll-pt-[4rem]">
      <body
        className={` ${interFont.variable} antialiased min-h-screen bg-background font-sans`}
        suppressHydrationWarning>
        <div className=" relative flex min-h-dvh flex-col bg-background">
          <ThemeProvider>
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
          </ThemeProvider>

        </div>
      </body>
    </html>
  );
}
