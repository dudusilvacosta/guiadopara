import { getImagemPorId } from "@/services/imagem.service";
import Image from "next/image";
import styles from "@/style/desc.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia do Pará | Lugar",
  description: "Criado por Eduardo Silva Costa",
};

type Props = {
  params: {
    id: string;
  };
};

export default async function ImagemPage(props: Props) {
  const params = await Promise.resolve(props.params);

  const id = Number(params.id);

  console.log("ID recebido:", id);

  const imagem = await getImagemPorId(id);

  if (!imagem) {
    return <p>Imagem não encontrada.</p>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagem.url}
          alt={imagem.nome ?? "Imagem"}
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
