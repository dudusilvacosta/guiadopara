import Link from "next/link";
import styles from "@/style/menu.module.css";
import { Heart, Home, Share2, Search, User } from "lucide-react";
export default function Menu() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <Home />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Search />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Share2 />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Heart />
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <User />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
