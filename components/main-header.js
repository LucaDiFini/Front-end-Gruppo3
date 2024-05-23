
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import styles from "./main-header.module.css";
import logo from '@/assets/logo3.png';
import Image from "next/image";
import classes from './main-header.module.css';



export default function MainHeader() {
    return (
      <div className={styles.headerContainer}>
      <header className={`${styles.header} d-flex flex-wrap align-items-center justify-content-between py-3 mb-4`}>
        <div className="col-md-3 mb-2 mb-md-0">
          <Link href="/" passHref>
          <div className={classes.logo}>
          <Image src={logo}/>
          </div>
          </Link>
        </div>

        <ul className={`${styles.navList} nav col-12 col-md-auto mb-2 justify-content-center mb-md-0`}>
          <li className={styles.navItem}>
            <Link href="/" passHref>
              <span className={styles.navLink}>Home</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/login" passHref>
              <span className={styles.navLink}>Corsi</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/dashboard_utente" passHref>
              <span className={styles.navLink}>Dashboard</span>
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <Link href="/login" passHref>
            <button className={`${styles.btn} btn btn-outline-primary me-2`}>Login</button>
          </Link>
          <Link href="/Pagina_di_Registrazione" passHref>
            <button className={`${styles.btn} btn btn-outline-primary me-2`}>Sign Up</button>
          </Link>
        </div>
      </header>
    </div>
    );
  }
  

