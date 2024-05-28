// app/page.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styles from "./page.module.css";
import home from '@/assets/home.jpg';
import incom from '@/assets/incom.webp';
import Image from "next/image";
import CallToAction from '@/components/call-to-action';
import Link from 'next/link';
import ImageComponent from '@/components/image-component';
import CourseCard from '@/components/Coursecard';

export default function Home() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.text}>
          <h2>ITS INCOM</h2>
          <h1>Scegli di <div>studiare un</div> <div>lavoro.</div></h1>
          <p>
            Metodo innovativo e tecnologia all’avanguardia per un percorso di crescita
            professionale mirato a farti entrare nel mondo del lavoro con le giuste competenze.
          </p>
          <Link href="/login" passHref>
            <button className={styles.button}>RICHIEDI INFORMAZIONI</button>
          </Link>
        </div>
        <div className={styles.image}>
          <Image src={incom} />
        </div>
      </div>

      <div className={styles.cerchi}>
      <div className="row">
  <ImageComponent
    src={require('@/assets/2.png')}
    alt="Prima immagine"
    text="DEI NOSTRI STUDENTI TROVA LAVORO AL TERMINE DEL PERCORSO"
  />
  <ImageComponent
    src={require('@/assets/1.png')}
    alt="Seconda immagine"
    text="DELLE ORE DI FORMAZIONE SI SVOLGE IN TIROCINIO IN AZIENDA"
  />
  <ImageComponent
    src={require('@/assets/3.png')}
    alt="Terza immagine"
    text="DEI NOSTRI DOCENTI PROVENGONO DAL MONDO DEL LAVORO"
  />
</div>

      </div>

      <hr className="featurette-divider" />

      <div className={styles.visitaComo}>
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-4 p-0 overflow-hidden shadow-lg d-flex my-auto">
              <Image src={home} height={400} width={500} />
            </div>

            <div className="col-lg-7 offset-lg-1 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">ITS INCOM Immagina te stesso… </h1>
              <p className="lead">Immagina una scuola che ti permette di sviluppare le tue abilità ed i tuoi talenti. Immagina di poter essere supportato da docenti professionisti e avere la possibilità di farti conoscere dalle aziende che hanno scelto di investire nell’innovazione. Immagina un ambiente dove potrai coltivare le tue competenze personali prima ancora che professionali. Immagina di poter fare esperienze di stage nazionale ed internazionale e di ottenere tutte le certificazioni abilitanti alla tua futura professione.
                <strong> Ora, rispondi a questa domanda: vuoi ancora solo immaginare?</strong></p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <Link href="/corsi" passHref>
                  <button type="button" className={styles.color}>Scopri i nostri corsi</button>
                </Link>
                <a href="https://www.google.com/maps/place/ITS+INCOM+Academy/@45.6358369,8.8513523,17.5z/data=!3m1!5s0x47868be28637c3b7:0xfbf7ca2cce96667b!4m14!1m7!3m6!1s0x47868b8a578a3fd5:0xae587e0bfe4fa313!2sITS+INCOM+Academy!8m2!3d45.6360424!4d8.8509754!16s%2Fg%2F11j219xg20!3m5!1s0x47868b8a578a3fd5:0xae587e0bfe4fa313!8m2!3d45.6360424!4d8.8509754!16s%2Fg%2F11j219xg20?entry=ttu">
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">Mappa</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className={styles.banner}>
        <h2>PARTECIPA AL PROSSIMO <div><strong>OPEN DAY </strong></div></h2>
        <div className={styles.date}>
          <span className={styles.day}>13</span>
          <span className={styles.month}>GIUGNO</span>
        </div>

        <Link href="/Pagina_di_Registrazione" passHref>
          <p className={styles.ctaButton}>PARTECIPA AL PROSSIMO OPEN DAY</p>
        </Link>
      </div>

      <div className={styles.sections}>
        <h1><strong>Il futuro è il lavoro che <div> desideri </div></strong></h1>
        <p>La Fondazione <strong>ITS INCOM </strong> Tecnologie dell'<strong>IN</strong>formazione e della <strong>COM</strong>unicazione offre formazioni post-diploma rivolte ai futuri professionisti dell'informatica e programmazione, reti e infrastrutture, digital marketing, comunicazione multichannel, e le industrie di Data science. <strong>Collaboriamo quotidianamente con oltre 180 aziende</strong> del territorio per rafforzare la crescita degli allievi attraverso esperienze professionali mirate e una didattica innovativa legata al territorio.</p>
      </div>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <CourseCard
              src={require('@/assets/VR.png')}
              alt="AR/VR Game Developer"
              text="Diventa AR/VR Game Developer: acquisirai le competenze per modellare, strutturare, sviluppare e pubblicare applicazioni per la realtà aumentata e virtuale, videogame e metaversi."
            />
            <CourseCard
              src={require('@/assets/Cloud.png')}
              alt="Cloud, Virtual & AI Specialist"
              text="Diventa Cloud, Virtual & AI Specialist: Gestisci l'implementazione delle tecnologie per il cloud e l'intelligenza artificiale, migliorando l'efficienza aziendale e favorendo l'innovazione digitale."
            />
            <CourseCard
              src={require('@/assets/analist.png')}
              alt="Digital Marketing & Communication"
              text="Diventa un esperto in Digital Marketing & Communication: Impara le strategie di marketing digitale per promuovere e comunicare con efficacia."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
