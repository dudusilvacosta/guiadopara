import { getImagemPorId } from "@/services/imagem.service";
import InstagramEmbedClient from "@/components/InstagramEmbedClient";
import style from "@/style/maps.module.css";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ImagemPage({ params }: Props) {
  const { id } = await params; // ✅ obrigatório aqui

  const imagem = await getImagemPorId(Number(id));

  if (!imagem) {
    return <p>Imagem não encontrada.</p>;
  }

  const lat = parseFloat(imagem.coords?.[0]);
  const lng = parseFloat(imagem.coords?.[1]);

  const isValid = !isNaN(lat) && !isNaN(lng);

  const mapsUrl = isValid
    ? `https://www.google.com/maps?q=${lat},${lng}`
    : null;

  return (
    <div style={{ margin: "0 1rem" }}>
      <InstagramEmbedClient instagramId={imagem.instagram_id} />

      {isValid ? (
        <a href={mapsUrl!} target="_blank" rel="noopener noreferrer">
          <button className={style.botaoMaps}>Abrir no Google Maps</button>
        </a>
      ) : (
        <p></p>
      )}
    </div>
  );
}
