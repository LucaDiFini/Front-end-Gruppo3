"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './page.module.css';
import { useEffect, useState } from 'react';
import CourseCard from '@/components/card-component';

const categoryImages = {
  'programmazione': '/assets/categoria1.png',
  'nuove_tecnologie': '/assets/categoria2.png',
  'comunicazione': '/assets/categoria3.png',
  // Aggiungi altre categorie e immagini
};

export default function Corsi() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8080/corsi', {
          credentials: 'include'
        });
        if (response.ok) {
          const data = await response.json();
          const formattedCourses = data.map(course => ({
            id: course.id,
            title: course.nome,
            category: course.categoria,
            description: course.descrizione,
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
        alert('Candidatura inviata con successo!');
      } else {
        console.error('Errore durante l\'invio della candidatura:', response.statusText);
      }
    } catch (error) {
      console.error('Errore durante l\'invio della candidatura:', error);
    }
  };

  const filteredCourses = courses.filter(course =>
    course.category.toLowerCase().includes(search.toLowerCase())
  );

  const groupedCourses = filteredCourses.reduce((acc, course) => {
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
        <input
          type="text"
          placeholder="Cerca per categoria"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control mb-4"
        />
        {Object.keys(groupedCourses).map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <div className="row">
              {groupedCourses[category].map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  applyCourse={applyCourse}
                  imageSrc={categoryImages[category] || '/assets/default.png'}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
