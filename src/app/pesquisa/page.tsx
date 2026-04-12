"use client";

import { useEffect, useState } from "react";
import { getPesquisa } from "@/services/imagem.service";
import { Imagem } from "@/types/imagem";
import styles from "@/style/tipo.module.css";
import Link from "next/link";

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
      <div className={styles.pesquisa}>
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
      <Link href={`/imagens/imagem/${img.id}`} className={styles.card}>
      
        <strong>{img.nome}</strong>
      </Link>
    </li>
  ))}
</ul>
    </>
  );
}
