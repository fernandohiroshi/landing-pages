import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Barbearia Estilo & Classe",
  description: "A Barbearia Estilo & Classe oferece cortes modernos, atendimento personalizado e uma experiência única para você se sentir renovado.",
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