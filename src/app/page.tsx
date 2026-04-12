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
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Museu_do_Forte_do_Pres%C3%A9pio_-_Bel%C3%A9m_05.jpg/960px-Museu_do_Forte_do_Pres%C3%A9pio_-_Bel%C3%A9m_05.jpg?_=20240923234943";
    case "Palacetes":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Palacete_Bolonha_-_IMG_9242_%282764919641%29.jpg/960px-Palacete_Bolonha_-_IMG_9242_%282764919641%29.jpg?_=20230520205030";
    case "Parques":
      return "https://upload.wikimedia.org/wikipedia/commons/3/3c/Est%C3%A1tua_de_Rui_Barata_no_Paque_da_Resid%C3%AAncia_%281662010834%29.jpg?_=20181105170841"
    case "Igrejas":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/IgrejaDoCarmo_Bel%C3%A9m_muses_de_belem_226_%283573720067%29.jpg/960px-IgrejaDoCarmo_Bel%C3%A9m_muses_de_belem_226_%283573720067%29.jpg?_=20180807022206";
    case "Teatros":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Theatro_da_Paz_05.jpg/960px-Theatro_da_Paz_05.jpg?_=20150915024927";
      case "Bosques":
      return "https://cdn.pixabay.com/photo/2020/01/16/00/44/park-4769324_1280.jpg";
      case "Históricos":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/FortePresepio-CCBY.jpg/960px-FortePresepio-CCBY.jpg?_=20070826095610";
      case "Ilhas":
      return "https://upload.wikimedia.org/wikipedia/commons/3/32/Praia_de_S%C3%A3o_Jo%C3%A3o_-_Salvaterra_-_Ilha_do_Maraj%C3%B3_-_Par%C3%A1.jpg";
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
