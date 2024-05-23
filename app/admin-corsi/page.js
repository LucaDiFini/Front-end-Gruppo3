"use client"; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from'./page.module.css'; 

export default function AdminCorsi() {
  const [courses, setCourses] = useState([]); 
  const [newCourse, setNewCourse] = useState({ title: '', category: '', instructor: '' }); 
  const router = useRouter(); 

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('/api/check-authentication'); 
        const { authenticated, role } = response.data;
        if (!authenticated || role !== 'admin') {
          router.push('/login');
        } else {
          fetchCourses();
        }
      } catch (error) {
        console.error('Errore durante il controllo dell\'autenticazione:', error);
      }
    };

    checkAuthentication();
  }, [router]); 

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/courses'); 
      setCourses(response.data);
    } catch (error) {
      console.error('Errore durante il recupero dei corsi:', error);
    }
  };

  const createCourse = async () => {
    try {
      const response = await axios.post('/api/create-course', newCourse); 
      console.log('Corso creato con successo:', response.data);
      fetchCourses();
      setNewCourse({ title: '', category: '', instructor: '' });
    } catch (error) {
      console.error('Errore durante la creazione del corso:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Gestione Corsi</h1>
      <div className="mb-4">
        <h2>Crea un nuovo corso</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          createCourse();
        }}>
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
    </div>
  );
}
