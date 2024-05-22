import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styles from "./page.module.css";
import classes from './page.module.css';
import home from '@/assets/home.jpg';
import primo from '@/assets/1.png';
import secondo from '@/assets/2.png';
import terzo from '@/assets/3.png';
import VR from '@/assets/VR.png';
import data from '@/assets/analist.png';
import webdev from '@/assets/webdev.png';
import cloud from '@/assets/cloud.png';
import mark from '@/assets/mark.png';
import webdes from '@/assets/webdes.png';
import incom from '@/assets/incom.webp';
import Image from "next/image";
import CallToAction from '@/components/call-to-action';

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
      <button className={styles.button}>RICHIEDI INFORMAZIONI</button>
      </div>
      <div className={styles.image}>
      <Image src={incom}/>
      </div>
      </div>


      <div className={classes.cerchi}>
        <div className="row">
          <div className="col-lg-4">
          <Image src={secondo} height={200} width={250} />
            <h4 className={`${classes.text} fw-normal`}>DEI NOSTRI STUDENTI TROVA LAVORO AL TERMINE DEL PERCORSO</h4>
          </div>
          <div className="col-lg-4">
            <Image src={primo} height={200} width={250} />
            <h4 className={`${classes.text} fw-normal`}>DELLE ORE DI FORMAZIONE SI SVOLGE IN TIROCINIO IN AZIENDA</h4>
          </div>
          <div className="col-lg-4">
            <Image src={terzo} height={200} width={250} />
            <h4 className={`${classes.text} fw-normal`}>DEI NOSTRI DOCENTI PROVENGONO DAL MONDO DEL LAVORO</h4>
          </div>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className={classes.visitaComo}>
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-4 p-0 overflow-hidden shadow-lg d-flex my-auto">
              <Image src={home} height={400} width={500} />
            </div>
           
            <div class="col-lg-7 offset-lg-1 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-bold lh-1 text-body-emphasis">ITS INCOM Immagina te stesso… </h1>
              <p class="lead">Immagina una scuola che ti permette di sviluppare le tue abilità ed i tuoi talenti. Immagina di poter essere supportato da docenti professionisti e avere la possibilità di farti conoscere dalle aziende che hanno scelto di investire nell’innovazione. Immagina un ambiente dove potrai coltivare le tue competenze personali prima ancora che professionali. Immagina di poter fare esperienze di stage nazionale ed internazionale e di ottenere tutte le certificazioni abilitanti alla tua futura professione.
                <strong> Ora, rispondi a questa domanda: vuoi ancora solo immaginare?</strong></p>
             
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                {/* Bottoni con link */}
                <a href="https://www.comune.como.it/it/" target="_blank">
                  <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Scopri Como</button>
                </a>
 
                <a href="https://www.google.com/maps/place/Stadio+Comunale+G.+Sinigaglia/@45.8138512,9.0723706,16z/data=!3m1!4b1!4m6!3m5!1s0x47869dadbd940c5d:0xf297e84469d5f04a!8m2!3d45.8138512!4d9.0723706!16zL20vMGN2OG52?hl=en&entry=ttu" target="_blank">
                  <button type="button" class="btn btn-outline-secondary btn-lg px-4">Mappa</button>
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
        
        <a href="#" className={styles.ctaButton}>PARTECIPA AL PROSSIMO OPEN DAY</a>
      </div>




      <div className={styles.sections}>
        <h1><strong>Il futuro è il lavoro che <div> desideri </div></strong></h1>
        <p>La Fondazione <strong>ITS INCOM </strong> Tecnologie dell'<strong>IN</strong>formazione e della <strong>COM</strong>unicazione offre formazioni post-diploma rivolte ai futuri professionisti dell'informatica e programmazione, reti e infrastrutture, digital marketing, comunicazione multichannel, e le industrie di Data science. <strong>Collaboriamo quotidianamente con oltre 180 aziende</strong> del territorio per rafforzare la crescita degli allievi attraverso esperienze professionali mirate e una didattica innovativa legata al territorio.</p>
      </div>





      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
              
                <Image src={VR} layout="responsive" width={420} height={225} />
              
                <div className="card-body">
                  <p className="card-text">Diventa AR/VR Game Developer: acquisirai le competenze per modellare, strutturare, sviluppare e pubblicare applicazioni per la realtà aumentata e virtuale, videogiochi sui principali store, e creare esperienze interattive nei nuovi Metaversi.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Scopri il corso</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
              
                <Image src={data} layout="responsive" width={420} height={225} />
              
                <div className="card-body">
                  <p className="card-text">Diventa professionista della gestione e analisi dei dati: imparerai a mettere i dati al servizio del business e a trovare la tua opportunità professionale nelle migliori aziende in Italia e all’estero.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Scopri il corso</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <Image src={webdev} layout="responsive" height={225} width={420} />
                <div className="card-body">
                  <p className="card-text">Diventa Web Developer, avrai le competenze per supportare lo sviluppo e l’integrazione di soluzioni software evolute all’interno dei processi aziendali. Sarai in grado di lavorare con tecnologie moderne e contribuire all'innovazione delle aziende.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Scopri il corso</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <Image src={cloud} layout="responsive" height={225} width={420} />
                <div className="card-body">
                  <p className="card-text">Diventa professionista della creazione di ambienti digitali complessi: imparerai a gestire ogni fase della progettazione di software e potrai lavorare nelle migliori aziende in Italia e all’estero.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Scopri il corso</button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <Image src={mark} layout="responsive" height={225} width={420} />
                <div className="card-body">
                  <p className="card-text">Diventa un professionista capace di conoscere e creare strategie marketing per i new media: potrai trovare lavoro come Digital ADS Specialist, Social Media Manager, Copywriter e molto altro.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Scopri il corso</button>
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <Image src={webdes} layout="responsive" height={225} width={420} />
                <div className="card-body">
                  <p className="card-text">Diventa un professionista e gestisci ogni aspetto della comunicazione digital delle aziende: potrai trovare lavoro come Web Designer, Graphic Designer, Video Editor e molto altro.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Scopri il corso</button>
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
    
  );
}
