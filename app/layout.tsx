import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sonic | developing ",
  description: "this is my personal portfolio",
  themeColor: [
    { media: "(prefers-color-scheme : light)", color: "white" },
    { media: "(prefers-color-scheme : dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center justify-center" >

        <div className="flex flex-col items-center  w-2/3">
          <Navbar />
          {children}
          <Footer />
        </div>
        </div>
      </body>
    </html>
  );
}
