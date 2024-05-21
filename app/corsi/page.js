"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Usa useRouter da next/navigation
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Corsi() {
  const [courses, setCourses] = useState([]); // Stato per memorizzare i corsi
  const router = useRouter(); // Usa useRouter per gestire il routing

  useEffect(() => {
    // Funzione per verificare l'autenticazione dello studente
    const checkAuthentication = async () => {
      try {
        // Effettua una chiamata all'API per verificare l'autenticazione dello studente
        const response = await axios.get('/api/check-authentication'); // Sostituisci con l'URL effettivo dell'API
        const { authenticated, role } = response.data;
        if (!authenticated || role !== 'student') {
          // Se l'utente non è autenticato o non è uno studente, reindirizzalo alla pagina di accesso
          router.push('/login');
        } else {
          // Se l'utente è autenticato come studente, carica i corsi
          fetchCourses();
        }
      } catch (error) {
        console.error('Errore durante il controllo dell\'autenticazione:', error);
      }
    };

    // Richiama la funzione al caricamento della pagina
    checkAuthentication();
  }, [router]); // Aggiungi router come dipendenza

  // Funzione per ottenere i corsi dal server
  const fetchCourses = async () => {
    try {
      // Effettua una chiamata all'API per ottenere i corsi
      const response = await axios.get('/api/courses'); // Sostituisci con l'URL effettivo dell'API
      setCourses(response.data);
    } catch (error) {
      console.error('Errore durante il recupero dei corsi:', error);
    }
  };

  // Funzione per gestire la candidatura a un corso
  const applyCourse = async (courseId) => {
    try {
      // Invia una richiesta all'API per candidarsi a un corso
      const response = await axios.post('/api/apply-course', { courseId }); // Sostituisci con l'URL effettivo dell'API
      console.log('Candidatura inviata con successo:', response.data);
    } catch (error) {
      console.error('Errore durante l\'invio della candidatura:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Corsi disponibili</h1>
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Categoria: {course.category}</p>
                <p className="card-text">Docente: {course.instructor}</p>
                <button className="btn btn-primary" onClick={() => applyCourse(course.id)}>Candidati</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
