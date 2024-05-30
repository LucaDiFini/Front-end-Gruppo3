<<<<<<< HEAD
// components/main-header.js
"use client";
import React, { useContext, useEffect } from 'react';
import styles from './main-header.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { AuthContext, useAuth } from '@/utils/AuthContext';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout, userRole } = useContext(AuthContext);

  useEffect(() => {
    console.log("User Role main-header:", userRole); // Aggiungi questo log per visualizzare il ruolo dell'utente
  }, [userRole]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>ITS INCOM ACADEMY</div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li><Link href="/"><span>Home</span></Link></li>
          <li><Link href="/corsi"><span>Corsi</span></Link></li>
          {isAuthenticated && (
            <>
              <li><Link href="/dashboard_utente"><span>Dashboard</span></Link></li>
              {userRole == 'A' && (
                <>
                  <li><Link href="/admin-utenti"><span>admin-utenti</span></Link></li>
                  <li><Link href="/admin-corsi"><span>admin-corsi</span></Link></li>
                </>
              )}
            </>
          )}
        </ul>
      </nav>
      <div className={styles.authButtons}>
        {isAuthenticated ? (
          <button onClick={logout} className={styles.login}>Logout</button>
        ) : (
          <>
            <Link href="/login">
              <span className={styles.login}>Login</span>
=======

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
            <li className={styles.navItem}>
            <Link href="/admin-utenti" passHref legacyBehavior>
              <a className={`${styles.navLink} ${styles.noUnderline}`}>admin-utenti</a>
>>>>>>> b3a500bac589cdd01a72a9fb3f632468c82cf981
            </Link>
            <Link href="/Pagina_di_Registrazione">
              <span className={styles.signup}>Sign Up</span>
            </Link>
<<<<<<< HEAD
          </>
        )}
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default MainHeader;
=======
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
 
>>>>>>> b3a500bac589cdd01a72a9fb3f632468c82cf981
