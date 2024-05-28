import React from 'react';
import Image from 'next/image';
import styles from './image-components.module.css'; // Importa i tuoi stili CSS locali

const ImageComponent = ({ src, alt, text }) => {
  return (
    <div className={`col-lg-4 ${styles.card}`}> {/* Aggiungi la classe card */}
      <div className={styles.imageContainer}>
        <Image src={src} height={200} width={250} alt={alt} />
        <h4 className="fw-normal">{text}</h4>
      </div>
    </div>
  );
};

export default ImageComponent;
