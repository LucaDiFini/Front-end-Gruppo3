// main-header.js

"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './main-header.module.css';
import logo from '../assets/logo3.png';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importa il router

export default function MainHeader() {
  const [ruolo, setRuolo] = useState(null);
  const router = useRouter(); // Inizializza il router

  useEffect(() => {
    const storedRuolo = localStorage.getItem('ruolo');
    console.log('storedRuolo', storedRuolo);
    setRuolo(storedRuolo);

    const handleRoleUpdate = (event) => {
      if (event.detail) {
        setRuolo(event.detail);
      }
    };

    window.addEventListener('roleUpdate', handleRoleUpdate);

    return () => {
      window.removeEventListener('roleUpdate', handleRoleUpdate);
    };
  }, []);

  const handleLogout = () => {
    // Rimuovi il ruolo da localStorage
    localStorage.removeItem('ruolo');
    setRuolo(null);
    const event = new CustomEvent('roleUpdate', { detail: null });
    window.dispatchEvent(event);

    // Rimuovi il cookie di sessione impostando la scadenza nel passato
    document.cookie = 'SESSION_ID=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    // Reindirizza alla pagina di login
    router.push('/login');
  };

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
          {ruolo && (
            <>
              {ruolo === 'S' && (
                <li className={styles.navItem}>
                  <Link href="/dashboard_utente" passHref legacyBehavior>
                    <a className={`${styles.navLink} ${styles.noUnderline}`}>Dashboard</a>
                  </Link>
                </li>
              )}
              {ruolo === 'A' && (
                <>
                  <li className={styles.navItem}>
                    <Link href="/dashboard_utente" passHref legacyBehavior>
                      <a className={`${styles.navLink} ${styles.noUnderline}`}>Dashboard</a>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/admin-utenti" passHref legacyBehavior>
                      <a className={`${styles.navLink} ${styles.noUnderline}`}>Admin Utenti</a>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/admin-corsi" passHref legacyBehavior>
                      <a className={`${styles.navLink} ${styles.noUnderline}`}>Admin Corsi</a>
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
        </ul>

        <div className={`${styles.btnContainer} col-md-3 text-end`}>
          {ruolo ? (
            <button className={`${styles.btn} btn btn-outline-primary`} onClick={handleLogout}>Logout</button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </header>
    </div>
  );
}