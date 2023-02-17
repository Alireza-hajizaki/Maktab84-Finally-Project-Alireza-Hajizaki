import React from 'react';
import "./CourseInfo.css";
import Header from "../../Layout/Header/Header"
import Footer from "../../Layout/Footer/Footer"
import Breadcrumb from '../../Compnents/Breadcrumb/Breadcrumb';

const CourseInfo = () => {
  return (
    <div>
      <Header/>
      <Breadcrumb
      links={[
        {id:1 , title:'خانه', to:''},
        {id:2 , title:'آموزش برنامه نویسی فرانت اند', to:'category-info/frontend'},
        {id:3 , title:'دوره جاوا اسکریپت', to:'course-info/js'},
      ]}
      />

      <Footer/>
    </div>
  )
}

export default CourseInfo