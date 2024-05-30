// Usa client;
"use client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';

export default function AdminCorsi() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ nome: '', categoria: '', dataInizio: '', dataFine: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8080/corsi');
      if (!response.ok) {
        throw new Error('Errore durante il recupero dei corsi');
      }
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
      const response = await fetch('http://localhost:8080/corsi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || 'Errore durante la creazione del corso');
      }
      alert('Corso creato con successo: ' + responseData.nome);
      fetchCourses();
      setNewCourse({ nome: '', categoria: '', dataInizio: '', dataFine: '' });
    } catch (error) {
      console.error('Errore durante la creazione del corso:', error);
      setError(error.message || 'Errore durante la creazione del corso');
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
              value={newCourse.nome}
              onChange={(e) => setNewCourse({ ...newCourse, nome: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Categoria</label>
            <input
              type="text"
              className="form-control"
              value={newCourse.categoria}
              onChange={(e) => setNewCourse({ ...newCourse, categoria: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Data Inizio</label>
            <input
              type="date"
              className="form-control"
              value={newCourse.dataInizio}
              onChange={(e) => setNewCourse({ ...newCourse, dataInizio: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Data Fine</label>
            <input
              type="date"
              className="form-control"
              value={newCourse.dataFine}
              onChange={(e) => setNewCourse({ ...newCourse, dataFine: e.target.value })}
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
            <div key={course.nome} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{course.nome}</h5>
                  <p className="card-text">Categoria: {course.categoria}</p>
                  <p className="card-text">Data Inizio: {course.dataInizio}</p>
                  <p className="card-text">Data Fine: {course.dataFine}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}