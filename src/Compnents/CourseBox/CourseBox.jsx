import React from 'react';
import "./CourseBox.css";
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CourseBox = ({name, cover,shortName,price}) => {
  return (
    <div className="col-4">
     <div className="course-box">
      <Link to ={`/course-info/${shortName}`}>
        <img src={`/images/courses/${cover}`} alt="Course img" className="course-box__img" />
      </Link>
      <div className="course-box__main">
        <Link to ={`/course-info/${shortName}`} className="course-box__title">{name}</Link>

        <div className="course-box__rating-teacher">
          <div className="course-box__teacher">
            <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
            <a href="#" className="course-box__teacher-link">رضا دولتی</a>
          </div>
          <div className="course-box__rating">
            <img src="/images/svgs/star.svg" alt="rating" className="course-box__star" />
            <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
            <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
            <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
            <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
          </div>
        </div>

        <div className="course-box__status">
          <div className="course-box__users">
            <i className="fas fa-users course-box__users-icon"></i>
            <span className="course-box__users-text">500</span>
          </div>
          <span className="course-box__price">
            {price === 0 ? 'رایگان' : price.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="course-box__footer">
        <Link to ={`/course-info/${shortName}`} className="course-box__footer-link">
          مشاهده اطلاعات
          <ArrowBackIcon/>
        </Link>
      </div>

     </div>
   </div>
  )
}

export default CourseBox