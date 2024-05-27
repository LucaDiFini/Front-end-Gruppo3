"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';

export default function AdminCorsi() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', category: '', instructor: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch('/api/check-authentication');
        const data = await response.json();
        const { authenticated, role } = data;
        if (!authenticated || role !== 'admin') {
          router.push('/login');
        } else {
          fetchCourses();
        }
      } catch (error) {
        console.error('Errore durante il controllo dell\'autenticazione:', error);
        setError('Errore durante il controllo dell\'autenticazione');
      }
    };

    checkAuthentication();
  }, [router]);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.error('Errore durante il recupero dei corsi:', error);
      setError('Errore durante il recupero dei corsi');
      setLoading(false);
    }
  };

  const createCourse = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/create-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });
      const data = await response.json();
      alert('Corso creato con successo: ' + data.title); // Usa un alert per notificare il successo
      fetchCourses();
      setNewCourse({ title: '', category: '', instructor: '' });
    } catch (error) {
      console.error('Errore durante la creazione del corso:', error);
      setError('Errore durante la creazione del corso');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Gestione Corsi</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className={`mb-4 ${styles.newCourseSection}`}>
        <h2>Crea un nuovo corso</h2>
        <form onSubmit={createCourse}>
          <div className="mb-3">
            <label className="form-label">Titolo</label>
            <input
              type="text"
              className="form-control"
              value={newCourse.title}
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Categoria</label>
            <input
              type="text"
              className="form-control"
              value={newCourse.category}
              onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Docente</label>
            <input
              type="text"
              className="form-control"
              value={newCourse.instructor}
              onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
              required
            />
          </div>
          <button type="submit" className={`${styles.btn} btn btn-danger mb-2 rounded-3`}>Crea Corso</button>
        </form>
      </div>
      <h2 className="mb-4">Corsi esistenti</h2>
      {loading ? (
        <div>Caricamento...</div>
      ) : (
        <div className="row">
          {courses.map(course => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">Categoria: {course.category}</p>
                  <p className="card-text">Docente: {course.instructor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
