// app/[id]/page.tsx
import { getImagemPorId } from "@/services/imagem.service";
import Image from "next/image";
import styles from "@/style/desc.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia do Pará | Lugar",
  description: "Criado por Eduardo Silva Costa",
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ImagemPage({ params }: Props) {
  const { id } = await params;

  const imagem = await getImagemPorId(Number(id));

  if (!imagem) {
    return <p>Imagem não encontrada.</p>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagem.url}
          alt={imagem.nome}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
        />
      </div>

      <div style={{ padding: "0 1rem" }}>
        <h2 className={styles.color}>{imagem.nome}</h2>

        <div className={styles.texto}>
          <p className={styles.desc}>{imagem.desc}</p>
        </div>
      </div>
    </section>
  );
}
