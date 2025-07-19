import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Konbini Code | Tecnologia, Design e Insights",
  description:
    "Descubra tendências, soluções criativas e estratégias digitais para impulsionar sua presença online. Conteúdo sobre desenvolvimento web, design, performance, SEO e muito mais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
