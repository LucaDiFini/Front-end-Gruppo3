import Link from 'next/link';
import Image from 'next/image';
import styles from './main-header.module.css';
import logo from '../assets/logo3.png'; 

export default function MainHeader() {
  return (
    <div className={styles.headerContainer}>
      <header className={`${styles.header} d-flex flex-wrap align-items-center justify-content-between py-3 mb-4`}>
        <div className="col-md-3 mb-2 mb-md-0">
          <Link href="/" passHref legacyBehavior>
            <a className={styles.logo}>
              <Image src={logo} alt="Logo" />
            </a>
          </Link>
        </div>

        <ul className={`${styles.navList} nav col-12 col-md-auto mb-2 justify-content-center mb-md-0`}>
          <li className={styles.navItem}>
            <Link href="/" passHref legacyBehavior>
              <a className={`${styles.navLink} ${styles.noUnderline}`}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/corsi" passHref legacyBehavior>
              <a className={`${styles.navLink} ${styles.noUnderline}`}>Corsi</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/dashboard_utente" passHref legacyBehavior>
              <a className={`${styles.navLink} ${styles.noUnderline}`}>Dashboard</a>
            </Link>
          </li>
        </ul>

        <div className={`${styles.btnContainer} col-md-3 text-end`}>
          <Link href="/login" passHref legacyBehavior>
            <a className={styles.noUnderline}>
              <button className={`${styles.btn} btn btn-outline-primary me-2`}>Login</button>
            </a>
          </Link>
          <Link href="/Pagina_di_Registrazione" passHref legacyBehavior>
            <a className={styles.noUnderline}>
              <button className={`${styles.btn} btn btn-outline-primary`}>Sign Up</button>
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
}
