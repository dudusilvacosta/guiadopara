import Link from "next/link";
import Image from "next/image";
import styles from "@/style/grid.module.css";
import { getTiposImagens } from "@/services/imagem.service";

export default async function IndexPage() {
  const tipos = await getTiposImagens();

  if (!tipos || tipos.length === 0) {
    return <p>Categorias não encontradas.</p>;
  }

  function getImagemPorTipo(tipo: string) {
  switch (tipo) {
    case "Museus":
      return "https://cdn.pixabay.com/photo/2016/09/06/18/22/visitors-1649815_1280.jpg";
    case "Palacetes":
      return "https://cdn.pixabay.com/photo/2017/07/20/17/01/tourism-2522919_1280.jpg";
    case "Parques":
      return "https://cdn.pixabay.com/photo/2016/05/14/21/11/sculpture-1392529_1280.jpg"
    case "Igrejas":
      return "https://cdn.pixabay.com/photo/2014/12/19/09/40/torino-573059_1280.jpg";
    case "Teatros":
      return "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg";
      case "Bosques":
      return "https://cdn.pixabay.com/photo/2018/04/14/23/12/white-3320445_1280.jpg";
      case "Históricos":
      return "https://cdn.pixabay.com/photo/2020/01/16/17/21/pantheon-4771206_1280.jpg";
      case "Ilhas":
      return "https://cdn.pixabay.com/photo/2017/06/30/18/38/landscape-2459172_1280.jpg";
    default:
      return "https://cdn.pixabay.com/photo/2019/04/11/22/29/airport-4120835_1280.jpg";
  }
}

  return (
    <ul className={styles.grid}>
      {tipos.map((tipo) => {
        return (
          <li key={tipo}>
            <Link href={`/imagens/${tipo}`} className={styles.card}>
              <Image
                 src={getImagemPorTipo(tipo)}
                alt={tipo}
                className={styles.image}
                fill
              />
              <span className={styles.label}>{tipo}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
