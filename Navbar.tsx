import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/">Home</Link></li>
                <li className={styles.navItem}><Link href="/about">About</Link></li>
                <li className={styles.navItem}><Link href="/students">Students</Link></li>
            </ul>
        </nav>
    );
}