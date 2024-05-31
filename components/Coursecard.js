import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '@/components/CourseCard.module.css';

export default function CourseCard({ course, applyCourse, imageSrc }) {
  if (!course) {
    console.error('Course prop is undefined');
    return null; // or render some fallback UI
  }

  const { src, alt, text, id } = course;

  /*return (
    <div className="col">
      <div className="card shadow-sm">
        <Image src={src} layout="responsive" width={420} height={225} alt={alt} />
        <div className="card-body">
          <p className="card-text">{text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => applyCourse(id)}
              >
                Candidati al corso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );*/
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <Image src={imageSrc} layout="responsive" width={420} height={225} alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">Categoria: {course.category}</p>
          <p className="card-text">{course.description}</p>
          <button className="btn btn-primary" onClick={() => applyCourse(course.id)}>Candidati</button>
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
  applyCourse: PropTypes.func.isRequired,
};
