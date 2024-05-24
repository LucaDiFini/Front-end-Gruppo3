"use client";
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

import VR from '@/assets/VR.png';
import data from '@/assets/analist.png';
import webdev from '@/assets/webdev.png';
import cloud from '@/assets/cloud.png';
import mark from '@/assets/mark.png';
import webdes from '@/assets/webdes.png';
import Image from "next/image";

export default function Corsi() {
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('/api/check-authentication'); 
        const { authenticated, role } = response.data;
        if (!authenticated || role !== 'student') {
          router.push('/login');
        }
      } catch (error) {
        console.error('Errore durante il controllo dell\'autenticazione:', error);
      }
    };
    checkAuthentication();
  }, [router]);
  const applyCourse = async (courseId) => {
    try {
      const response = await axios.post('/api/apply-course', { courseId });
      console.log('Candidatura inviata con successo:', response.data);
    } catch (error) {
      console.error('Errore durante l\'invio della candidatura:', error);
    }
  };

  const courses = [
    {
      id: 1,
      title: "AR/VR Game Developer",
      category: "Nuove Tecnologie",
      instructor: "Nome Docente",
      image: VR,
      description: "Diventa AR/VR Game Developer: acquisirai le competenze per modellare, strutturare, sviluppare e pubblicare applicazioni per la realtà aumentata e virtuale, videogiochi sui principali store, e creare esperienze interattive nei nuovi Metaversi."
    },
    {
      id: 2,
      title: "Data Analysis",
      category: "Programmazione",
      instructor: "Nome Docente",
      image: data,
      description: "Diventa professionista della gestione e analisi dei dati: imparerai a mettere i dati al servizio del business e a trovare la tua opportunità professionale nelle migliori aziende in Italia e all’estero."
    },
    {
      id: 3,
      title: "Web Developer",
      category: "Programmazione",
      instructor: "Nome Docente",
      image: webdev,
      description: "Diventa Web Developer, avrai le competenze per supportare lo sviluppo e l’integrazione di soluzioni software evolute all’interno dei processi aziendali. Sarai in grado di lavorare con tecnologie moderne e contribuire all'innovazione delle aziende."
    },
    {
      id: 4,
      title: "Cloud Specialist",
      category: "Nuove Tecnologie",
      instructor: "Nome Docente",
      image: cloud,
      description: "Diventa professionista della creazione di ambienti digitali complessi: imparerai a gestire ogni fase della progettazione di software e potrai lavorare nelle migliori aziende in Italia e all’estero."
    },
    {
      id: 5,
      title: "Digital Marketing",
      category: "Comunicazione",
      instructor: "Nome Docente",
      image: mark,
      description: "Diventa un professionista capace di conoscere e creare strategie marketing per i new media: potrai trovare lavoro come Digital ADS Specialist, Social Media Manager, Copywriter e molto altro."
    },
    {
      id: 6,
      title: "Web Design",
      category: "Comunicazione",
      instructor: "Nome Docente",
      image: webdes,
      description: "Diventa un professionista e gestisci ogni aspetto della comunicazione digital delle aziende: potrai trovare lavoro come Web Designer, Graphic Designer, Video Editor e molto altro."
    }
  ];

  return (
    <div className="container mt-5">
      
      <h1 className="mb-4">Corsi disponibili</h1>
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <Image src={course.image} layout="responsive" width={420} height={225} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Categoria: {course.category}</p>
                <p className="card-text">Docente: {course.instructor}</p>
                <p className="card-text">{course.description}</p>
                <button className="btn btn-primary" onClick={() => applyCourse(course.id)}>Candidati</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
