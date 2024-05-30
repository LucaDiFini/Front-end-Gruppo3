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
            </Link>
            <Link href="/Pagina_di_Registrazione">
              <span className={styles.signup}>Sign Up</span>
            </Link>
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
