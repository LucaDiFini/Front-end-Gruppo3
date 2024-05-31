"use client";

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import styles from './page.module.css';

export default function AdminCandidature() {
    const [isClient, setIsClient] = useState(false);
    const [candidatures, setCandidatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const sessionId = Cookies.get('SESSION_ID');
            if (sessionId) {
                fetchCandidatures();
            } else {
                console.error('Session ID not found in cookies.');
                setError('Session ID not found in cookies.');
                setLoading(false);
            }
        }
    }, [isClient]);

    const fetchCandidatures = async () => {
        try {
            const response = await fetch('http://localhost:8080/candidatura/all', {
                credentials: 'include'
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
            }
            const data = await response.json();
            const adaptedData = data.map(candidature => ({
                id: candidature.id_candidatura,
                name: candidature.nome_utente || '',
                surname: candidature.cognome_utente || '',
                email: '', // L'email non è inclusa nella tabella, ma è possibile aggiungerlo
                course: candidature.nome_corso || '',
                status: candidature.esito || 'IN_ATTESA'
            }));
            setCandidatures(adaptedData);
            setLoading(false);
        } catch (error) {
            console.error('Errore durante il recupero delle candidature:', error);
            setError(`Errore durante il recupero delle candidature: ${error.message}`);
            setLoading(false);
        }
    };

    const changeStatus = async (candidatureId, newStatus) => {
        try {
            const response = await fetch('http://localhost:8080/candidatura/changeStatus', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id_candidatura: candidatureId, new_status: newStatus }),
                credentials: 'include',
            });
            if (!response.ok) throw new Error('Network response was not ok');
            fetchCandidatures(); // fa il REFRESH delle candidature una volta aggiornato lo stato
        } catch (error) {
            console.error('Errore durante il cambio di stato:', error);
            setError('Errore durante il cambio di stato');
        }
    };

    const columns = [
        {
            name: 'Nome',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Cognome',
            selector: row => row.surname,
            sortable: true,
        },
        {
            name: 'Corso',
            selector: row => row.course,
            sortable: true,
        },
        {
            name: 'Esito',
            selector: row => row.status,
            sortable: true,
            cell: row => (
                <select
                    value={row.status}
                    onChange={(e) => changeStatus(row.id, e.target.value)}
                    className="form-select"
                >
                    <option value="IN_ATTESA">In attesa</option>
                    <option value="CONVOCATO">Convocato</option>
                    <option value="BOCCIATO">Bocciato</option>
                </select>
            ),
        },
    ];

    const filteredCandidatures = candidatures.filter(candidature => {
        return (
            (candidature.name && candidature.name.toLowerCase().includes(search.toLowerCase())) ||
            (candidature.surname && candidature.surname.toLowerCase().includes(search.toLowerCase())) ||
            (candidature.course && candidature.course.toLowerCase().includes(search.toLowerCase())) ||
            (candidature.status && candidature.status.toLowerCase().includes(search.toLowerCase()))
        );
    });

    if (!isClient) {
        return null;
    }

    return (
        <div className={`container ${styles.mainContainer}`}>
            <h2 className="mb-4">Candidature esistenti</h2>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Cerca"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading ? (
                <div>Caricamento...</div>
            ) : (
                <DataTable
                    columns={columns}
                    data={filteredCandidatures}
                    pagination
                />
            )}

            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
