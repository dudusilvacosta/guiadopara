import Link from "next/link";
import Image from "next/image";
import styles from "@/style/grid.module.css";
import { getTiposImagens } from "@/services/imagem.service";
import { Tipo } from "@/types/tipo";

export default async function IndexPage() {
  const tipos: Tipo[] = await getTiposImagens();

  if (!tipos || tipos.length === 0) {
    return <p>Categorias não encontradas.</p>;
  }

  function getImagemPorTipo(tipo: string): string {
    switch (tipo) {
      case "exposicoes":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Museu_do_Forte_do_Pres%C3%A9pio_-_Bel%C3%A9m_05.jpg/960px-Museu_do_Forte_do_Pres%C3%A9pio_-_Bel%C3%A9m_05.jpg";
      case "palacetes":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Palacete_Bolonha_-_IMG_9242_%282764919641%29.jpg/960px-Palacete_Bolonha_-_IMG_9242_%282764919641%29.jpg";
      case "parques":
        return "https://upload.wikimedia.org/wikipedia/commons/3/3c/Est%C3%A1tua_de_Rui_Barata_no_Paque_da_Resid%C3%AAncia_%281662010834%29.jpg";
      case "igrejas":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/IgrejaDoCarmo_Bel%C3%A9m_muses_de_belem_226_%283573720067%29.jpg/960px-IgrejaDoCarmo_Bel%C3%A9m_muses_de_belem_226_%283573720067%29.jpg";
      case "teatros":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Theatro_da_Paz_05.jpg/960px-Theatro_da_Paz_05.jpg";
      case "bosques":
        return "https://cdn.pixabay.com/photo/2020/01/16/00/44/park-4769324_1280.jpg";
      case "historicos":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/FortePresepio-CCBY.jpg/960px-FortePresepio-CCBY.jpg";
      case "ilhas":
        return "https://upload.wikimedia.org/wikipedia/commons/3/32/Praia_de_S%C3%A3o_Jo%C3%A3o_-_Salvaterra_-_Ilha_do_Maraj%C3%B3_-_Par%C3%A1.jpg";
       case "praias":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ilha_de_Maraj%C3%B3_Beach%2C_Par%C3%A1%2C_Brazil.jpg/960px-Ilha_de_Maraj%C3%B3_Beach%2C_Par%C3%A1%2C_Brazil.jpg?_=20120113235018";
      case "orlas":
        return "https://upload.wikimedia.org/wikipedia/commons/2/2b/Rio_Xingu_e_a_Orla_de_Senador_Jos%C3%A9_Porf%C3%ADrio.jpg?_=20181026014002";
      default:
        return "https://cdn.pixabay.com/photo/2019/04/11/22/29/airport-4120835_1280.jpg";
    }
  }

  return (
    <ul className={styles.grid}>
      {tipos.map((tipo) => (
        <li key={tipo.slug}>
          <Link href={`/imagens/${tipo.slug}`} className={styles.card}>
            <Image
              src={getImagemPorTipo(tipo.slug)}
              alt={tipo.tipo}
              className={styles.image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <span className={styles.label}>{tipo.tipo}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}