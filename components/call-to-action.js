import styles from './call-to-action.module.css';

export default function CallToAction() {
    return (
        <>
            <section className={styles.callToAction}>
                <div className={styles.container}>
                    <div className={styles.imageSection}>
                        <img src="https://itsincom.it/wp-content/uploads/2023/03/chiamaci.webp" alt="Informazioni sui corsi" className={styles.image} />
                    </div>
                    <div className={styles.textSection}>
                        <h2>Vuoi più informazioni sui nostri corsi?</h2>
                        <p>Ti richiamiamo senza impegno!</p>
                        <a href="#" className={styles.button}>RICHIAMATEMI ORA</a>
                    </div>

                </div>
            </section>
        </>
    );
}