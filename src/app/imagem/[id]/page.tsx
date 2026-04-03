// app/[id]/page.tsx
import { getImagemPorId } from "@/services/imagem.service";
import Image from "next/image";
import styles from "@/style/desc.module.css";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ImagemPage({ params }: Props) {
  const { id } = await params;

  const imagem = await getImagemPorId(Number(id));

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagem.url}
          alt={imagem.nome}
          fill
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
