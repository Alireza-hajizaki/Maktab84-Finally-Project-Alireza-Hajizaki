import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from '../../Compnents/Header/Header'
import LatestCourses from '../../Compnents/LatestCourses/LatestCourses'
import AboutUs from '../../Compnents/AboutUs/AboutUs';

const Index = () => {
  return (
    <div>
      <Header/>
      <LatestCourses/>
      <AboutUs/>
    </div>
  )
}

export default Index