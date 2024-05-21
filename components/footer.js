import Link from 'next/link';
import Image from 'next/image';
import classes from './footer.module.css';


export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.logoContainer}>
        <p>ANIME CHANNEL</p>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Anime🔥</Link>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li>
            <Link href="/about">About🌐</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.footerInfo}>
        <p>&copy; 2024 Anime Channel. All rights reserved.</p>
        <p>Contact us: contact@animechannel.com</p>
      </div>
    </footer>
  );
}
