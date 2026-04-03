import Image from "next/image";
import styles from "@/style/header.module.css";
import img from "@/assets/512x512.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBorder}>
        <Image src={img} alt="Logo" className={styles.logo} />
      </div>
      <h1>Guia do Pará</h1>
    </header>
  );
}
