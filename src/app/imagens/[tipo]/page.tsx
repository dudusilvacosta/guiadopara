import { getImagensPorTipo } from "@/services/imagem.service";
import Link from "next/link";
import styles from "@/style/tipo.module.css";
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
      <Link href={`/imagens/imagem/${img.id}`} className={styles.card}>
        <strong>{img.nome}</strong>
      </Link>
    </li>
  ))}
</ul>
  );
}
