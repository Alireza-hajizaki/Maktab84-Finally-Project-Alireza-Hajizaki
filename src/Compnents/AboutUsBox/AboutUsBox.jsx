import React from 'react';
import "./AboutUsBox.css";

const AboutUsBox = ({title , description,logo}) => {
  return (
    <div>
          <div>
              <div className="about-us__box">
                <div className="about-us__box-right">
                {logo}
                </div>
                <div className="about-us__box-left">
                  <span className="about-us__box-title">{title}</span>
                  <span className="about-us__box-text">{description}</span>
                </div>
              </div>
          </div>
    </div>
  )
}

export default AboutUsBox