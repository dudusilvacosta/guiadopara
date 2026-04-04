import "@/style/globals.css";
import Nav from "@/components/nav";
import Header from "@/components/header";
import styles from "@/style/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia do Pará",
  description:
    "Explore as belezas do Pará através de imagens incríveis. Descubra os tipos de paisagens, cultura e natureza que fazem do Pará um destino único. Navegue por categorias e encontre a inspiração para sua próxima viagem ou projeto criativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <Header />
          <main>{children}</main>
          <Nav />
        </div>
      </body>
    </html>
  );
}
