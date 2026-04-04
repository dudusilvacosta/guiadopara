import { getTiposComCapa } from "@/services/imagem.service";
import Link from "next/link";
import Image from "next/image";
import styles from "@/style/grid.module.css";

export default async function IndexPage() {
  const tipos = await getTiposComCapa();

  if (!tipos || tipos.length === 0) {
    return <p>Categorias não encontradas.</p>;
  }

  return (
    <ul className={styles.grid}>
      {tipos.map((img) => {
        if (!img?.tipo || !img?.url) return null;
        return (
          <li key={img.tipo}>
            <Link href={`/imagens/${img.tipo}`} className={styles.card}>
              <Image
                src={img.url}
                alt={img.nome ?? img.tipo}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
                priority={false}
              />
              <span className={styles.label}>{img.tipo}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
