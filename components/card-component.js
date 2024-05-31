import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CourseCard({ course, applyCourse, imageSrc }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <Image src={imageSrc || course.image} alt={course.title} layout="responsive" width={420} height={225} />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">Categoria: {course.category}</p>
          <p className="card-text">Docente: {course.instructor}</p>
          <p className="card-text">{course.description}</p>
          <button className="btn btn-primary" onClick={() => applyCourse(course.id)}>Candidati</button>
        </div>
      </div>
    </div>
  );
}
