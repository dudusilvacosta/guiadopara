import type { Metadata } from "next";
import "@/style/globals.css";
import Menu from "@/components/menu";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado por Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Menu />
      </body>
    </html>
  );
}
