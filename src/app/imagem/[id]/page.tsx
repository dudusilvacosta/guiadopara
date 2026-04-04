import { getImagemPorId } from "@/services/imagem.service";
import Image from "next/image";
import styles from "@/style/desc.module.css";

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
    <div style={{ margin: "0 1rem" }}>
      <h2 className={styles.color}>{imagem.nome}</h2>
      <div className={styles.imageWrapper}>
        <Image
          key={imagem.id}
          src={imagem.url}
          alt={imagem.nome}
          width={1200}
          height={800}
          className={styles.image}
          // priority={index === 0}
        />
      </div>
      <p className={styles.autor}>{imagem.autor}</p>

      <div
        className={styles.desc}
        dangerouslySetInnerHTML={{ __html: imagem.desc }}
      />
    </div>
  );
}
