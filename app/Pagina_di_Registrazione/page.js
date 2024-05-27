"use client"; // Assicurati che questa direttiva sia la prima cosa nel file

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import { useState } from 'react';

export default function Register() {
  // Inizializzazione dello stato del modulo
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    password: '',
    email: '',
  });

  // Funzione per gestire il cambiamento dei campi del modulo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Funzione per gestire l'invio del modulo
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registrazione avvenuta con successo:', data);
        // Gestisci la risposta positiva qui (ad esempio, reindirizza l'utente o mostra un messaggio di successo)
        alert('Registrazione avvenuta con successo');
      } else {
        const errorData = await response.json();
        console.error('Errore nella registrazione:', errorData);
        // Gestisci l'errore qui (ad esempio, mostra un messaggio di errore all'utente)
        alert(`Errore nella registrazione: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Errore di rete:', error);
      alert('Errore di rete. Si prega di riprovare.');
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
