// login.js

"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import InputForm from '@/components/input_form';

const BASE_URL = 'http://localhost:8080';

export default function Pagina_di_Accesso() {
  const router = useRouter();
  const [form, setForm] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Login fallito');
      }

      const data = await response.json();
      localStorage.setItem('ruolo', data.ruolo);

      // Emetti un evento personalizzato
      const event = new CustomEvent('roleUpdate', { detail: data.ruolo });
      window.dispatchEvent(event);

      // Reindirizza in base al ruolo
      if (data.ruolo === 'A') {
        router.push('/admin-corsi');
      } else if (data.ruolo === 'S') {
        router.push('/corsi');
      } else {
        router.push('/');
      }
    } catch (err) {
      setError(err.message || 'Login fallito');
    }
  };

  return (
    <div className="bg-body-secondary">
      <div className={`modal modal-sheet position-static d-block p-4 py-md-5 ${styles.login}`} tabIndex="-1" role="dialog" id="modalSignin">
        <div className="container">
          <div className="row justify-content-center">
            <div className={`encouragement-text col-lg-6 mb-5 ${styles['encouragement-text']}`}>
              <h2 className="fw-bold mb-0">Bentornato!</h2>
              <p>Accedi per scoprire le ultime novità e continuare a imparare con noi.</p>
            </div>

            <div className={`modal-content rounded-4 shadow ${styles['form-bg-azzurro']} col-lg-6 p-4`}>
              <div className="modal-header p-5 pb-4 border-bottom-0">
                <h1 className="fw-bold mb-0 fs-2">Login</h1>
              </div>
              <div className="modal-body p-5 pt-0">
                <form onSubmit={handleLogin}>
                  <InputForm
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                  >
                    Indirizzo email
                  </InputForm>

                  <InputForm
                    type="password"
                    id="password"
                    value={form.password}
                    onChange={handleChange}
                  >
                    Password
                  </InputForm>

                  <button className="d-block w-100 btn btn-danger mb-2 rounded-3" type="submit">Accedi</button>

                  <small className="text-body-secondary">Password dimenticata?</small>
                  <hr className="my-4" />
                  <h2 className="fs-5 fw-bold mb-3">O usa un servizio esterno</h2>
                  <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                    <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter" /></svg>
                    Accedi con Twitter
                  </button>
                  <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                    <svg className="bi me-1" width="16" height="16"><use xlinkHref="#facebook" /></svg>
                    Accedi con Facebook
                  </button>
                  <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                    <svg className="bi me-1" width="16" height="16"><use xlinkHref="#github" /></svg>
                    Accedi con GitHub
                  </button>
                </form>
                {error && <p className="text-danger mt-3">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
