import { getImagensPorTipo } from "@/services/imagem.service";
import Image from "next/image";
import Link from "next/link"; // ✅ importar
import styles from "@/style/grid.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia do Pará | Categoria",
  description: "Criado por Eduardo Silva Costa",
};

type Props = {
  params: Promise<{
    tipo: string;
  }>;
};

export default async function ImagensTipoPage({ params }: Props) {
  const { tipo } = await params;

  const imagens = await getImagensPorTipo(tipo);

  if (!imagens) {
    return <p>Imagens não encontradas.</p>;
  }

  return (
    <ul className={styles.grid}>
      {imagens.map((img) => (
        <li key={img.id}>
          <Link href={`/imagem/${img.id}`} className={styles.card}>
            <Image
              src={img.url}
              alt={img.nome}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.image}
            />
            <span className={styles.label}>{img.nome}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
