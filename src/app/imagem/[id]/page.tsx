import { getImagemPorId } from "@/services/imagem.service";
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

      <div style={{ position: "relative", height: "324px", overflow: "hidden" }}>
        <blockquote
          style={{ position: "absolute", top: "-55px" }}
          className="instagram-media"
          data-instgrm-permalink={`https://www.instagram.com/p/${imagem.instagram_id}/?utm_source=ig_embed&utm_campaign=loading`}
          data-instgrm-version="14"
        ></blockquote>
      </div>
      <h2 className={styles.color}>{imagem.nome}</h2>

      <p className={styles.autor}>{imagem.autor}</p>

      <div
        className={styles.desc}
        dangerouslySetInnerHTML={{ __html: imagem.desc }}
      />
    </div>
  );
}
