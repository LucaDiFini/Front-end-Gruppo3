"use client";

import React, { useState } from 'react';
import { loginUser } from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';

export default function Pagina_di_Accesso() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const data = await loginUser(formData);
      console.log('Login avvenuto con successo:', data);
      localStorage.setItem('token', data.token);
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error('Errore durante il login:', error);
      setError(error.message);
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
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control rounded-3"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Indirizzo email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control rounded-3"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
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

