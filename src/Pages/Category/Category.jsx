import React, { useEffect, useState } from 'react';
import './Category.css';
import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';
import CourseBox from '../../Compnents/CourseBox/CourseBox';
import Pagination from '../../Compnents/Pagination/Pagination'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SearchIcon from '@mui/icons-material/Search';
import { useParams } from 'react-router-dom';

const Category = () => {

  const {categoryName} = useParams()
  const [courses , setCourses] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/v1/courses/category/frontend',)
    .then(res => res.json())
    .then(data => console.log(data))
  } ,[])

  return (
    <div>
      <Header/>

      <section className="courses">
        <div className="container">
          <div className="courses-top-bar">

          <div className="courses-top-bar__right">
            <div className="courses-top-bar__row-btn courses-top-bar__icon--active">
            <BorderAllIcon/>
            </div>
            <div className="courses-top-bar__column-btn">
            <FormatAlignLeftIcon/>
            </div>

            <div className="courses-top-bar__selection">
              <span className="courses-top-bar__selection-title">
                مرتب سازی پیش فرض
                <KeyboardArrowDownIcon/>
              </span>
              <ul className="courses-top-bar__selection-list">
                <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active">مرتب سازی پیش فرض</li>
                <li className="courses-top-bar__selection-item">مربت سازی بر اساس محبوبیت</li>
                <li className="courses-top-bar__selection-item">مربت سازی بر اساس امتیاز</li>
                <li className="courses-top-bar__selection-item">مربت سازی بر اساس آخرین</li>
                <li className="courses-top-bar__selection-item">مربت سازی بر اساس ارزان ترین</li>
                <li className="courses-top-bar__selection-item">مربت سازی بر اساس گران ترین</li>
              </ul>
            </div>
          </div>

          <div className="courses-top-bar__left">
            <form action="#" className="courses-top-bar__form">
              <input type="text" className="courses-top-bar__input" placeholder="جستجوی دوره ..." />
              <SearchIcon fontSize='large' className='courses-top-bar__search-icon'/>
            </form>
          </div>

          </div>

          <div class="courses-content">
           <div class="container">
            <div class="row">
             {/* <CourseBox/>
             <CourseBox/>
             <CourseBox/> */}
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

export default Category