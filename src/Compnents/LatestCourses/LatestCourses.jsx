import React from 'react';
import CourseBox from '../CourseBox/CourseBox';
import SectionHeader from '../SectionHeader/SectionHeader';
import "./LatestCourses.css";
import { Link } from 'react-router-dom';

const LatestCourses = () => {
  return (
    <div>
      <div className="courses">
        <div className="container">
          <SectionHeader title="دوره های آموزشی"/>

          <div className="courses-content">
            <div className="container">
              <div className="row">
                <CourseBox/>
                <CourseBox/>
                <CourseBox/>
                <CourseBox/>
                <CourseBox/>
                <CourseBox/>
              </div>
            </div>
          </div>
        </div>
      </div>

        
      <div>
      <Link to='/courses' className='courses__gtl'>تمامی دوره ها</Link>
      </div>

    </div>
  )
}

export default LatestCourses