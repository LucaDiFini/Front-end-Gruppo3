'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Calendar from 'react-calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';

const BASE_URL = 'http://localhost:8080'; // Modifica questo con il tuo URL base

const DashboardUtente = () => {
    const [userData, setUserData] = useState(null);
    const [coursesData, setCoursesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const newsData = [
        {
            title: 'Il teatro arriva a ITS INCOM con la storia di Antonio Stano',
            image: 'https://itsincom.it/wp-content/uploads/2024/05/spettacolo-teatrale-ITS-INCOM-400x200.jpeg',
            link: 'https://itsincom.it/il-teatro-arriva-a-its-incom-con-la-storia-di-antonio-stano/',
            date: '21 Maggio 2024'
        },
        {
            title: 'La Costituzione diventa arte – La mostra “ART32” arriva a Busto Arsizio',
            image: 'https://itsincom.it/wp-content/uploads/2024/05/stendino-400x200.jpeg',
            link: 'https://itsincom.it/la-costituzione-diventa-artela-mostra-art32-arriva-a-busto-arsizio/',
            date: '15 Maggio 2024'
        },
        {
            title: 'Due insegnanti spagnole in visita a ITS INCOM',
            image: 'https://itsincom.it/wp-content/uploads/2024/04/Las4-400x200.jpg',
            link: 'https://itsincom.it/due-insegnanti-spagnole-in-visita-a-its-incom/',
            date: '23 Aprile 2024'
        },
        // Aggiungi altre notizie qui se necessario
    ];

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Effettua la chiamata all'API per ottenere i dati dell'utente
                const response = await fetch(`${BASE_URL}/utente/profile`, {
                    credentials: 'include', // Include i cookie con la richiesta
                });

                if (!response.ok) {
                    throw new Error('Errore nel recupero dei dati utente');
                }

                const userData = await response.json();
                setUserData(userData);

                // Effettua la chiamata all'API per ottenere le candidature dell'utente
                const candidaturesResponse = await fetch(`${BASE_URL}/utente/candidature`, {
                    credentials: 'include', // Include i cookie con la richiesta
                });

                if (!candidaturesResponse.ok) {
                    throw new Error('Errore nel recupero dei dati delle candidature');
                }

                const candidaturesData = await candidaturesResponse.json();

                // Recupera i dettagli dei corsi per ciascuna candidatura
                const coursesPromises = candidaturesData.map(async (candidature) => {
                    const courseResponse = await fetch(`${BASE_URL}/corsi/${candidature.id_corso}`, {
                        credentials: 'include',
                    });

                    if (!courseResponse.ok) {
                        throw new Error('Errore nel recupero dei dati del corso');
                    }

                    const courseData = await courseResponse.json();
                    return {
                        ...courseData,
                        esito: candidature.esito,
                    };
                });

                const coursesData = await Promise.all(coursesPromises);
                setCoursesData(coursesData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <p>Caricamento in corso...</p>;
    }

    if (error) {
        return <p>Errore: {error}</p>;
    }

    return (
        <div className={styles['dashboard-container']}>
            <div className={`${styles['user-section']}`}>
                <h2>{userData.nome} {userData.cognome}</h2>
                <p>Email: {userData.email}</p>
            </div>
            <div className={`${styles['courses-section']} ${styles.section}`}>
                <h2>Corsi</h2>
                {coursesData.map(course => (
                    <div key={course.id} className={styles['course-card']}>
                        <h3>{course.nome}</h3>
                        <p>Esito: {course.esito}</p>
                    </div>
                ))}
            </div>

            <div className={`${styles['calendar-section']} ${styles.section} ${styles.reactCalendar}`}>
                <h2>Calendario</h2>
                <Calendar
                    locale="it-IT"
                />
            </div>
            <div className={`${styles['news-section']}`}>
                <h2>News</h2>
                <div className={styles['news-grid']}>
                    {newsData.map((news, index) => (
                        <a key={index} href={news.link} className={styles['news-card']}>
                            <img src={news.image} alt={news.title} />
                            <div className={styles['news-info']}>
                                <h3>{news.title}</h3>
                                <p>{news.date}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardUtente;
