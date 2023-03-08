import React,{useEffect ,useState} from 'react'
import './Courses.css';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Breadcrumb from '../../Compnents/Breadcrumb/Breadcrumb'
import CourseBox from '../../Compnents/CourseBox/CourseBox';
import Pagination from '../../Compnents/Pagination/Pagination'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Courses = () => {

  const [courses , setCourses] = useState([])
  const [shownCourses , setShownCourses] = useState([])
  const [status, setStatus] = useState('default')
  const [statusTitle, setStatusTitle] = useState('مرتب سازی پیش فرض')
  const [orderedCourses , setOrderCourses] = useState([])
  const [searchValue , setSearchValue] = useState('')
  
  useEffect(()=>{
    const localStorageData = JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3001/v1/courses',{
      headers:{
      "Authorization" : `Bearer ${localStorageData.token}`
      },
    }).then(res => res.data)
    .then(data => {
      setCourses(data)
      setOrderCourses(data)}
      )
      .catch(err => console.log(err))
  } ,[])


  // sorting
  useEffect(() => {
    switch (status) {
      case 'free': {
        const freeCourses = courses.filter(course => course.price === 0)
        setOrderCourses(freeCourses)
        break
      }
      case 'money': {
        const notFreeCourses = courses.filter(course => course.price !== 0)
        setOrderCourses(notFreeCourses)
        break
      }
      case 'last': {
        setOrderCourses(courses)
        break
      }
      case 'first': {
        const reversedCourses = courses.slice().reverse()
        setOrderCourses(reversedCourses)
        break
      }
      default:{
        setOrderCourses(courses)
      }
    }
  } ,[status])

  const titleChangeHandler = (e) => {
    setStatusTitle(e.target.textContent)
  }

  //searching
  const searchValueChangeHandler = (e) =>{
    setSearchValue(e.target.value)
    const filteredCourses = courses.filter((course) => course.name.includes(e.target.value)) ;
    setOrderCourses(filteredCourses)
  }

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
               {statusTitle}
               <KeyboardArrowDownIcon/>
             </span>
             <ul className="courses-top-bar__selection-list">
               <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active" onClick={(e) =>{
                setStatus('مرتب سازی پیش فرض')
                titleChangeHandler(e)
                }}>
                مرتب سازی پیش فرض
               </li>
               <li className="courses-top-bar__selection-item" onClick={(e) =>{
                setStatus('free')
                titleChangeHandler(e)
                }}>
                مرتب سازی دوره های رایگان
                </li>
               <li className="courses-top-bar__selection-item" onClick={(e) =>{
                setStatus('money')
                titleChangeHandler(e)
                }}>
                مرتب سازی دوره های پولی
                </li>
               <li className="courses-top-bar__selection-item" onClick={(e) =>{
                setStatus('last')
                titleChangeHandler(e)
                }}>
                مرتب سازی بر اساس آخرین
                </li>
               <li className="courses-top-bar__selection-item" onClick={(e) =>{
                setStatus('first')
                titleChangeHandler(e)
                }}>
                مرتب سازی بر اساس اولین
                </li>
            </ul>
          </div>
        </div>

        <div className="courses-top-bar__left">
          <form action="#" className="courses-top-bar__form">
            <input 
            type="text" 
            className="courses-top-bar__input" 
            placeholder="جستجوی دوره ..." 
            value={searchValue}
            onChange={searchValueChangeHandler}
            />
            <SearchIcon fontSize='large' className='courses-top-bar__search-icon'/>
          </form>
        </div>

        </div>

          <div className="courses-content">
            <div className="container">
              <div className="row">
                {shownCourses.map(course =>(
                  <CourseBox key={course._id} {...course}/>
                ))}
              </div>
            </div>
          </div>

          <Pagination
          items = {orderedCourses}
          itemsCount = {3}
          pathname="/courses"
          setShownCourses={setShownCourses}
          />
          
        </div>
</section>

        <Footer/>
    </div>
  )
}

export default Courses