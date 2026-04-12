import { getImagemPorId } from "@/services/imagem.service";
import InstagramEmbed from "@/components/InstagramEmbed";

type Props = {
  params: {
    id: string;
  };
};

export default async function ImagemPage(props: Props) {
  const params = await props.params; // 👈 CORRETO

  const id = Number(params.id);

  const imagem = await getImagemPorId(id);

  if (!imagem) {
    return <p>Imagem não encontrada.</p>;
  }

  return (
    <div style={{ margin: "0 1rem" }}>
      <InstagramEmbed instagramId={imagem.instagram_id} />
    </div>
  );
}