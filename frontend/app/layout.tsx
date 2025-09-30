import type { Metadata } from "next";
import { Lexend_Deca, Overlock } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const overlock = Overlock({
  variable: "--font-overlock",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dental WebApp",
  description: "For interview assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.variable} ${overlock.variable}`}>
        {children}
      </body>
    </html>
  );
}
