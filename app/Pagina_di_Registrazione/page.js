"use client";
 
import React, { useState } from 'react';
import { registerUser } from '../../utils/api';
import styles from './page.module.css';
 
export default function Pagina_di_Accesso() {
    const [form, setForm] = useState({
        nome: '',
        cognome: '',
        email: '',
        password: '',
    });
 
    const [error, setError] = useState(null);
 
    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const userData = {
                nome: form.nome,
                cognome: form.cognome,
                email: form.email,
                password: form.password,
            };
            const response = await registerUser(userData);
            console.log('User registered:', response);
            // Redirect or show success message
        } catch (err) {
            setError(err.message || 'Registration failed');
        }
    };
 
    return (
        <div className={styles.container}>
            <div className="modal modal-sheet position-static d-block p-4 py-md-5 bg-body-secondary" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className={`modal-content rounded-4 shadow ${styles['form-bg-azzurro']}`}>
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h11 className="fw-bold mb-0 fs-2">Registrazione</h11>
                        </div>
                        <div className="modal-body p-5 pt-0">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-3" id="nome" value={form.nome} onChange={handleChange} />
                                    <label htmlFor="nome">Nome</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-3" id="cognome" value={form.cognome} onChange={handleChange} />
                                    <label htmlFor="cognome">Cognome</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="email" value={form.email} onChange={handleChange} />
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="password" value={form.password} onChange={handleChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <button className="d-block w-100 btn btn-danger mb-2 rounded-3" type="submit">Registrati</button>
                                <small className="text-body-secondary">Registrandoti accetti i termini e condizioni. </small>
                                <hr className="my-4" />
                                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                                    <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter" /></svg>
                                    Sign up with Twitter
                                </button>
                                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                                    <svg className="bi me-1" width="16" height="16"><use xlinkHref="#facebook" /></svg>
                                    Sign up with Facebook
                                </button>
                                <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                                    <svg className="bi me-1" width="16" height="16"><use xlinkHref="#github" /></svg>
                                    Sign up with GitHub
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {error && <p>{error}</p>}
        </div>
    );
}