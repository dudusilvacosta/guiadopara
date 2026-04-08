"use client";

import { useEffect, useState } from "react";
import { getPesquisa } from "@/services/imagem.service";
import { Imagem } from "@/types/imagem";
import styles from "@/style/grid.module.css";
import styless from "@/style/pesquisa.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PesquisaInput() {
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState<Imagem[]>([]);

  useEffect(() => {
    const delay = setTimeout(async () => {
      const res = await getPesquisa(termo);
      setResultados(res || []);
    }, 300);

    return () => clearTimeout(delay);
  }, [termo]);

  return (
    <>
      <div className={styless.pesquisa}>
        <input
          type="search"
          placeholder="Pesquisar..."
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
        />
      </div>

      <ul className={styles.grid}>
        {resultados.map((img) => (
          <li key={img.id}>
            <Link href={`/imagem/${img.id}`} className={styles.card}>
              <blockquote
          style={{ position: "absolute", top: "-55px" }}
          className="instagram-media"
          data-instgrm-permalink={`https://www.instagram.com/p/${img.instagram_id}/?utm_source=ig_embed&utm_campaign=loading`}
          data-instgrm-version="14"
        ></blockquote>
              <span className={styles.label}>{img.nome}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
