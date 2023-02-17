import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from '../../Layout/Header/Header'
import LatestCourses from '../../Compnents/LatestCourses/LatestCourses'
import AboutUs from '../../Compnents/AboutUs/AboutUs';
import Landing from "../../Compnents/Landing/Landing"
import LatestArticles from '../../Compnents/LatestArticles/LatestArticles';
import Footer from '../../Layout/Footer/Footer';

const Index = () => {
  return (
    <div>
      <Header/>
      <Landing/>
      <LatestCourses/>
      <LatestArticles/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Index