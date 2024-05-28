import Link from 'next/link';
import Image from 'next/image'; // Aggiungi questa riga per importare l'elemento Image da Next.js
import classes from './footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard_utente">Dashboard</Link>
          </li>
          <li>
            <Link href="/corsi">Corsi</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.footerInfo}>
        <p>&copy; {new Date().getFullYear()} ITSIncom. All rights reserved.</p>
        <p>Contact us: <a href="mailto:segreteria@itsrizzoli.it">segreteria@itsrizzoli.it</a></p>
      </div>
    </footer>
  );
}
