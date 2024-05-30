"use client";

import classes from './page.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseCard from '@/components/card-component';

export default function Corsi() {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch('http://localhost:8080/auth/profile', {
          credentials: 'include' // Includiamo i cookie con la richiesta
        });
        if (response.ok) {
          const data = await response.json();
          const { ruolo } = data; // Assumendo che il profilo utente contenga il campo 'ruolo'
          if (ruolo !== 's') {
            router.push('corsi');
          }
        } else {
          router.push('corsi');
        }
      } catch (error) {
        console.error('Errore durante il controllo dell\'autenticazione:', error);
        router.push('corsi');
      }
    };
    checkAuthentication();
  }, [router]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8080/corsi', {
          credentials: 'include'
        });
        if (response.ok) {
          const data = await response.json();
          // Modifica: Adattamento del formato dei dati dei corsi
          const formattedCourses = data.map(course => ({
            id: course.id,
            title: course.nome,
            category: course.categoria,
            // Aggiungi altri campi se necessario
          }));
          setCourses(formattedCourses);
          setLoading(false);
        } else {
          console.error('Errore durante il fetch dei corsi:', response.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error('Errore durante il fetch dei corsi:', error);
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const applyCourse = async (courseId) => {
    try {
      const response = await fetch(`http://localhost:8080/candidatura/iscrizione/${courseId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Candidatura inviata con successo:', data);
      } else {
        console.error('Errore durante l\'invio della candidatura:', response.statusText);
      }
    } catch (error) {
      console.error('Errore durante l\'invio della candidatura:', error);
    }
  };

  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  if (loading) {
    return <p>Caricamento...</p>;
  }

  return (
    <div className={classes.corsi}>
      <div className="container mt-5">
        <h1 className="mb-4">Corsi disponibili</h1>
        {Object.keys(groupedCourses).map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <div className="row">
              {groupedCourses[category].map(course => (
                <CourseCard key={course.id} course={course} applyCourse={applyCourse} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}