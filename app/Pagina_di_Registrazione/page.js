import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css'; // Assicurati che il percorso del file CSS sia corretto

export default function Pagina_di_Accesso() {
    return (
        <div className="modal modal-sheet position-static d-block p-4 py-md-5 bg-body-secondary" tabIndex="-1" role="dialog" id="modalSignin">
            <div className="modal-dialog" role="document">
                <div className={`modal-content rounded-4 shadow ${styles['form-bg-azzurro']}`}>
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h1 className="fw-bold mb-0 fs-2">Registrazione</h1>
                    </div>
                    <div className="modal-body p-5 pt-0">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="Inserisci qui il tuo nome" />
                                <label htmlFor="floatingInput">Nome</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="Inserisci qui il tuo cognome" />
                                <label htmlFor="floatingInput">Cognome</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button className="d-block w-100 btn btn-danger mb-2 rounded-3" type="submit">Registrati</button>
                            <small className="text-body-secondary">Registrandoti accetti i termini e condizioni presenti nella sezione privacy e acconsenti all'invio di email informative da parte del nostro sistema. </small>
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
    );
}