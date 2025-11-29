import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "История Горной ЦРБ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-full max-h-full overflow-hidden flex flex-col gap-5">
          <header className="flex container px-5 h-20 items-center py-4 justify-between">
            <div className="flex gap-5 h-full items-center">
              <img
                src="/logo.webp"
                alt="лого"
                className="aspect-square h-full"
              />
              <p className="hidden sm:block">Онлайн-музей Горной ЦРБ</p>
            </div>
            <div className="flex flex-row gap-5">
              <Link href="/contacts">Контакты</Link>
              <Link href="/buy">Купить книги</Link>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
