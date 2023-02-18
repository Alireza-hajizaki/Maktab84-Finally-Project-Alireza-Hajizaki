import React from 'react'
import './Courses.css';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Breadcrumb from '../../Compnents/Breadcrumb/Breadcrumb'
import CourseBox from '../../Compnents/CourseBox/CourseBox';
import Pagination from '../../Compnents/Pagination/Pagination'

const Courses = () => {
  return (
    <div>
        <Header/>
        <Breadcrumb
        links={[
        {id:1 , title:'خانه', to:''},
        {id:2 , title:'تمامی دوره ها', to:'courses'}
        ]}
        />

<section className="courses">
        <div className="container">
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

          <Pagination/>
          
        </div>
</section>

        <Footer/>
    </div>
  )
}

export default Courses