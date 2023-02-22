import React, { useEffect, useState } from 'react';
import CourseBox from '../CourseBox/CourseBox';
import SectionHeader from '../SectionHeader/SectionHeader';
import "./LatestCourses.css";
import { Link } from 'react-router-dom';

const LatestCourses = () => {

  const [courses , setCourses] = useState([])

  useEffect(()=>{
    const localStorageData = JSON.parse(localStorage.getItem('user'));
    fetch('http://localhost:3001/v1/courses',{
      method:'GET',
      headers:{
      "Authorization" : `Bearer ${localStorageData.token}`
      },
    }).then(res => res.json())
    .then(data => setCourses(data))
  } ,[])

  return (
    <div>
      <div className="courses">
        <div className="container">
          <SectionHeader title="دوره های آموزشی"/>

          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.slice(0,6).map(course => (
                  <CourseBox {...course}/>
                ))}
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