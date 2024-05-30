import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from '@/components/CourseCard.module.css';

export default function CourseCard({ course }) {
  if (!course) {
    console.error('Course prop is undefined');
    return null; // or render some fallback UI
  }

  const { src, alt, text, id } = course;

  async function newCandidatura(courseId) {
    console.log('Course ID:', courseId);
    try {
      const response = await axios.post(`/candidature/iscrizione/${courseId}`, {
        SESSION_ID: Cookies.get('SESSION_ID'),
        id: courseId,
      });
      console.log('API response:', response.data);
    } catch (error) {
      console.error('Error making API call:', error);
    }
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Image src={src} layout="responsive" width={420} height={225} alt={alt} />
        <div className="card-body">
          <p className="card-text">{text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link href="/login" passHref>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => newCandidatura(id)}
                >
                  Scopri il corso
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
