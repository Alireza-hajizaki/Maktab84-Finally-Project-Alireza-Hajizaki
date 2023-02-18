import React from 'react';
import "./DescCourseBox.css";

const DescCourseBox = ({title , desc , icon}) => {
  return (
    <div>
        <div>
            <div className="course-boxes__box">
                  <div className="course-boxes__box-right">
                      {icon}
                  </div>
                  <div className="course-boxes__box-left">
                        <span className="course-boxes__box-left-title">
                          {title}
                        </span>
                        <span className="course-boxes__box-left--subtitle">
                          {desc}
                        </span>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default DescCourseBox