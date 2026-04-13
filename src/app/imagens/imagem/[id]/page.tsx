import { getImagemPorId } from "@/services/imagem.service";
import InstagramEmbedClient from "@/components/InstagramEmbedClient";

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
    <div style={{ margin: "0 1rem" }}>
      <InstagramEmbedClient instagramId={imagem.instagram_id} />
    </div>
  );
}