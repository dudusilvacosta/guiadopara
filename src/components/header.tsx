import Image from "next/image";
import styles from "@/style/header.module.css";
import img from "@/assets/512x512.png";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/" className={styles.header}>
        <div className={styles.logoBorder}>
          <Image
            src={img}
            alt="Logo"
            width={50}
            height={50}
            className={styles.logo}
            priority
          />
        </div>
        <h1>Guia do Pará</h1>
      </Link>
    </header>
  );
}
