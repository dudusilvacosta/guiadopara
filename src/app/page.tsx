import { getTiposComCapa } from "@/services/imagem.service";
import Link from "next/link";
import Image from "next/image";
import styles from "@/style/grid.module.css";

export default async function IndexPage() {
  const tipos = await getTiposComCapa();
  if (!tipos) {
    return <p>Categorias não encontradas.</p>;
  }
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Categorias</h2>
      <ul className={styles.grid}>
        {tipos.map((img) => (
          <li key={img.tipo}>
            <Link href={`/imagens/${img.tipo}`} className={styles.card}>
              <Image
                src={img.url}
                alt={img.nome}
                fill
                className={styles.image}
              />
              <span className={styles.label}>{img.tipo}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
