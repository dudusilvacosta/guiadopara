import "@/style/globals.css";
import Nav from "@/components/nav";
import Header from "@/components/header";
import styles from "@/style/globals.css";

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
