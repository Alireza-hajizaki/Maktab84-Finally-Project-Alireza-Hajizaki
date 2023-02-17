import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from '../../Layout/Header/Header'
import LatestCourses from '../../Compnents/LatestCourses/LatestCourses'
import AboutUs from '../../Compnents/AboutUs/AboutUs';
import Landing from "../../Compnents/Landing/Landing"
import LatestArticles from '../../Compnents/LatestArticles/LatestArticles';

const Index = () => {
  return (
    <div>
      <Header/>
      <Landing/>
      <LatestCourses/>
      <AboutUs/>
      <LatestArticles/>
    </div>
  )
}

export default Index