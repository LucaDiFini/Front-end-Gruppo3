// components/CourseCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/CourseCard.module.css';

export default function CourseCard({ src, alt, text }) {
  return (
    <div className="col">
      <div className={`card shadow-sm ${styles.card}`}>
        <Image src={src} layout="responsive" width={420} height={225} alt={alt} />
        <div className="card-body">
          <p className="card-text">{text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link href="/login" passHref>
                <button type="button" className="btn btn-sm btn-outline-secondary">Scopri il corso</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
