import Image from 'next/image';
import React from 'react';  
import styles from './page.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const coursesData = [
        { id: 1, name: 'Corso di Web Developer', status: 'In attesa', progress: 25 },
    ];

    const studentData = {
        name: 'Mario Rossi',
        email: 'mario.rossi@example.com',
        phone: '+39 1234567890',
        address: 'Via Roma 123, 00100 Roma',
        course: 'Corso di Informatica Avanzata',
        applicationStatus: 'Approvata'
    };

    const notifications = [
        'Notifica 1',
        'Notifica 2',
        'Notifica 3'
    ];

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


    return (
        <div className={styles['dashboard-container']}>
            <div className={`${styles['user-section']}`}>
                <h2>{studentData.name}</h2>
                <p>Email: {studentData.email}</p>
                <p>Telefono: {studentData.phone}</p>
                <p>Indirizzo: {studentData.address}</p>
            </div>
            <div className={`${styles['courses-section']} ${styles.section}`}>
                <h2>Corsi</h2>
                {coursesData.map(course => (
                    <div key={course.id} className={styles['course-card']}>
                        <h3>{course.name}</h3>
                        <p>Status: {course.status}</p>
                        <div className={styles['progress-bar']}>
                            <div className={styles['progress-bar-fill']} style={{ width: `${course.progress}%`, backgroundColor: course.progress < 50 ? '#ff6363' : course.progress < 75 ? '#ffd700' : '#32cd32' }}>
                                <span className={styles['progress-bar-text']}>{course.progress}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`${styles['notifications-section']} ${styles.section}`}>
                <h2>Notifiche</h2>
                {notifications.map((notification, index) => (
                    <div key={index} className={styles['notification-card']}>
                        <p>{notification}</p>
                    </div>
                ))}
            </div>
            <div className={`${styles['calendar-section']} ${styles.section} ${styles.reactCalendar}`}>
                <h2>Calendario</h2>
                <Calendar
                    locale="it-IT"  // Assicurati che il locale sia supportato
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

export default Dashboard;
