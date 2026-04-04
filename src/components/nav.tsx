"use client";

import Link from "next/link";
import styles from "@/style/nav.module.css";
import { Heart, Home, Share2, Search, User } from "lucide-react";

export default function Nav() {
  const compartilharURL = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Guia do Pará",
          text: "Descubra o Pará",
          url: "https://guiadopara.netlify.app/",
        })
        .then(() => console.log("Compartilhado com sucesso"))
        .catch((error) => console.log("Erro ao compartilhar", error));
    } else {
      alert("Compartilhamento não suportado neste navegador");
    }
  };

  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <Home />
          </Link>
        </li>

        <li>
          <Link href="/pesquisa">
            <Search />
          </Link>
        </li>

        <li>
          <div onClick={compartilharURL} style={{ color: "#515bd4" }}>
            <Share2 />
          </div>
        </li>

        <li>
          <Link href="/">
            <Heart />
          </Link>
        </li>

        <li>
          <Link href="/contato">
            <User />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
