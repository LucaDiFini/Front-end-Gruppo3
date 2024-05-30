import Link from 'next/link';
import Image from 'next/image';
import classes from './footer.module.css';


export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.logoContainer}>
        <p>ITS INCOM</p>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Home</Link>
          </li>
          <li>
            <Link href="/reviews">Dashboard</Link>
          </li>
          <li>
            <Link href="/about">Corsi</Link>
          </li>
          <li>
            
          </li>
        </ul>
      </nav>
      <div className={classes.footerInfo}>
        <p>&copy; 2024 ITSIncom. All rights reserved.</p>
        <p>Contact us: contact@itsincom.it</p>
      </div>
    </footer>
  );
}
