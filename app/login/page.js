<<<<<<< HEAD
// pages/login/page.js
"use client";

import React, { useContext, useState } from 'react';
import { loginUser } from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import InputForm from '@/components/input_form';
import { AuthContext, useAuth } from '@/utils/AuthContext';

export default function Pagina_di_Accesso() {
  const { login } = useAuth();
  const { setUserRole } = useContext(AuthContext);
=======
"use client";
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import InputForm from '@/components/input_form';

export default function Pagina_di_Accesso() {
  const router = useRouter();
>>>>>>> b3a500bac589cdd01a72a9fb3f632468c82cf981
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
<<<<<<< HEAD
      const userData = {
        email: form.email,
        password: form.password,
      };
      const token = await loginUser(userData);
      login(token, 'A');
=======
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        credentials: 'include', // Assicurati che i cookie siano inclusi nella richiesta
      });

      if (!response.ok) {
        throw new Error('Login fallito');
      }

      // Se il login è andato a buon fine, naviga verso la pagina desiderata
      const currentPage = window.location.pathname;
      if (currentPage === '/login') {
        router.push('/corsi');
      } else {
        router.push('/');
      }
>>>>>>> b3a500bac589cdd01a72a9fb3f632468c82cf981
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
