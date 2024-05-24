import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import classes from './page.module.css';



export default function Pagina_di_Accesso() {
  return (
    <div className={classes.login}>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-body-secondary">
      <div className="d-flex flex-row align-items-center">
        <div className={`encouragement-text ${styles['encouragement-text']} me-5`}>
          <h2 className="fw-bold mb-0">Bentornato!</h2>
          <p>Accedi per scoprire le ultime novità e continuare a imparare con noi.</p>
                </div>
        <div className={`modal-content rounded-4 shadow ${styles['form-bg-azzurro']} p-4`}>
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Login</h1>
                </div>
          <div className="modal-body p-5 pt-0">
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="d-block w-100 btn btn-danger mb-2 rounded-3" type="submit">Log in</button>
              <small className="text-body-secondary">Password Dimenticata?</small>
              <hr className="my-4" />
              <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
              <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter" /></svg>
                Log in with Twitter
              </button>
              <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                <svg className="bi me-1" width="16" height="16"><use xlinkHref="#facebook" /></svg>
                Log in with Facebook
              </button>
              <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                <svg className="bi me-1" width="16" height="16"><use xlinkHref="#github" /></svg>
                Log in with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
