"use client";

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import styles from './page.module.css';

export default function AdminUtenti() {
    const [isClient, setIsClient] = useState(false);
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ nome: '', cognome: '', email: '', password: '', ruolo: 'S' });
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
                fetchUsers();
            } else {
                console.error('Session ID not found in cookies.');
                setError('Session ID not found in cookies.');
                setLoading(false);
            }
        }
    }, [isClient]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/utente/all', {
                credentials: 'include'
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
            }
            const data = await response.json();
            const adaptedData = data.map(user => ({
                id: user.id,
                name: user.nome,
                surname: user.cognome,
                email: user.email,
                ruolo: user.ruolo
            }));
            setUsers(adaptedData);
            setLoading(false);
        } catch (error) {
            console.error('Errore durante il recupero degli utenti:', error);
            setError(`Errore durante il recupero degli utenti: ${error.message}`);
            setLoading(false);
        }
    };

    const createUser = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: newUser.nome,
                    cognome: newUser.cognome,
                    email: newUser.email,
                    password: newUser.password,
                    ruolo: newUser.ruolo
                }),
                credentials: 'include',
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            alert('Utente creato con successo: ' + data.nome);
            fetchUsers();
            setNewUser({ nome: '', cognome: '', email: '', password: '', ruolo: 'S' });
        } catch (error) {
            console.error('Errore durante la creazione dell\'utente:', error);
            setError('Errore durante la creazione dell\'utente');
        }
    };

    const changeRole = async (userId, newRole) => {
        try {
            const response = await fetch('http://localhost:8080/utente/changeRuolo', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id_utente: userId, new_ruolo: newRole }),
                credentials: 'include',
            });
            if (!response.ok) throw new Error('Network response was not ok');
            fetchUsers(); // Refresh the user list after changing the role
        } catch (error) {
            console.error('Errore durante il cambio di ruolo:', error);
            setError('Errore durante il cambio di ruolo');
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
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Ruolo',
            selector: row => row.ruolo,
            sortable: true,
            cell: row => (
                <select
                    value={row.ruolo}
                    onChange={(e) => changeRole(row.id, e.target.value)}
                    className="form-select"
                >
                    <option value="S">Studente</option>
                    <option value="D">Docente</option>
                    <option value="A">Admin</option>
                </select>
            ),
        },
    ];

    const filteredUsers = users.filter(user => {
        return (
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.surname.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.ruolo.toLowerCase().includes(search.toLowerCase())
        );
    });

    if (!isClient) {
        return null;
    }

    return (
        <div className={`container ${styles.mainContainer}`}>
            <h2 className="mb-4">Utenti esistenti</h2>
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
                    data={filteredUsers}
                    pagination
                />
            )}

            {error && <div className="alert alert-danger">{error}</div>}
            <div className={`mb-4 ${styles.newUserSection}`}>
                <h2>Crea un nuovo utente</h2>
                <form onSubmit={createUser}>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            value={newUser.nome}
                            onChange={(e) => setNewUser({ ...newUser, nome: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cognome</label>
                        <input
                            type="text"
                            className="form-control"
                            value={newUser.cognome}
                            onChange={(e) => setNewUser({ ...newUser, cognome: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={newUser.password}
                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ruolo</label>
                        <select
                            className="form-control"
                            value={newUser.ruolo}
                            onChange={(e) => setNewUser({ ...newUser, ruolo: e.target.value })}
                        >
                            <option value="S">Studente</option>
                            <option value="D">Docente</option>
                            <option value="A">Admin</option>
                        </select>
                    </div>
                    <button type="submit" className={`${styles.btn} btn btn-danger mb-2 rounded-3`}>Crea Utente</button>
                </form>
            </div>
        </div>
    );
}
