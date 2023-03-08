import React, { useEffect , useState } from 'react';
import "./CourseInfo.css";
import Header from "../../Layout/Header/Header"
import Footer from "../../Layout/Footer/Footer"
import Breadcrumb from '../../Compnents/Breadcrumb/Breadcrumb';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import DescCourseBox from '../../Compnents/DescCourseBox/DescCourseBox';
import SchoolIcon from '@mui/icons-material/School';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CommentTextArea from '../../Compnents/CommentTextArea/CommentTextArea';
import { useParams } from 'react-router';


const CourseInfo = () => {

  const {courseName} = useParams()
  const [sessions, setSessions]= useState([])
  const [courseDeteils, setCourseDeteils]= useState({})
  const [categoryTitle , setCategoryTitle] = useState({})
 
  useEffect(()=>{
    fetch(`http://localhost:3001/v1/courses/${courseName}`,{
      method:'POST',
      headers:{
        'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
      }
    }).then(res => res.json())
    .then(courseInfo =>{
      setCourseDeteils(courseInfo)
      setCategoryTitle(courseInfo.categoryID)
      setSessions(courseInfo.sessions)
    })
  } ,[])


  return (
    <div>
      <Header/>
      <Breadcrumb
      links={[
        {id:1 , title:'خانه', to:''},
        {id:2 , title: categoryTitle.title , to:'category-info/frontend'},
        {id:3 , title: courseName , to:`course-info/${courseName}`},
      ]}
      />

    <section className="course-info">
      <div className="container">
        <div className="row">
          <div className="col-6 course-info__container">
            <a href="#" className="course-info__link">
              {categoryTitle.title}
            </a>
            <h1 className="course-info__title">
              {courseDeteils.name}
            </h1>
            <p className="course-info__text">
              {courseDeteils.description}
            </p>
            <div className="course-info__social-media">
              <a href="#" className="course-info__social-media-item">
                <TelegramIcon/>
              </a>
              <a href="#" className="course-info__social-media-item">
                <TwitterIcon/>
              </a>
              <a href="#" className="course-info__social-media-item">
                <FacebookIcon/>
              </a>
            </div>
          </div>

          <div className="col-6">
            <video src="" poster="/images/courses/js_project.png" className="course-info__video" controls></video>
          </div>
        </div>
      </div>
    </section>

    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="course">
             <div className="course-boxes">
              <div className="row">
                 <div className="col-4">
                  <DescCourseBox
                  title='وضعیت دوره:'
                  desc='به اتمام رسیده'
                  icon={<SchoolIcon color="primary" sx={{ fontSize: 40 }}/>}
                  />
                 </div>
                 <div className="col-4">
                  <DescCourseBox
                  title='مدت زمان دوره:'
                  desc='19 ساعت'
                  icon={<AccessAlarmsIcon color="primary" sx={{ fontSize: 40 }}/>}
                  />
                 </div>
                 <div className="col-4">
                  <DescCourseBox
                  title='پیش نیاز:'
                  desc='HTML CSS'
                  icon={<CheckCircleOutlineIcon color="primary" sx={{ fontSize: 40 }}/>}
                  />
                 </div>
              </div>
             </div> 
             <div className="introduction">
                <div className="introduction__item">
                  <span className="introduction__title title">
                    آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار
                  </span>
                  <img src="/images/info/1.gif" alt="course info image" className="introduction__img img-fluid" />
                  <p className="introduction__text">
                    کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و سالانه چندین کتابخانه جدید نیز به این لیست اضافه می شود که در بازار کار به شدت از آن ها استفاده می شود و اگر بدون بلد بودن این کتابخانه ها وارد بازار کار شوید، خیلی اذیت خواهید شد و حتی ممکن است ناامید شوید!
                  </p>
                  <p className="introduction__text">
                    در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه های جاوا اسکریپت به صورت پروژه محور به شما عزیزان آموزش داده می شود تا هیچ مشکلی برای ورود به بازار کار نداشته باشید
                  </p>
                </div>
                <div className="introduction__item">
                  <span className="introduction__title title">
                    هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب درآمد)
                  </span>
                  <img src="/images/info/2.jpg" alt="course info image" className="introduction__img img-fluid" />
                  <p className="introduction__text">
                    وقتی برای اولین بار وارد یکی از شرکت های برنامه نویسی شدم، از کتابخانه هایی به اسم Lodash و Formik استفاده می شد، در حالی که من اولین بارم بود اسم Formik را می شنیدم و تا اون موقع از این کتابخانه ها استفاده نکرده بودم.
                  </p>
                  <p className="introduction__text">
                    همینجا بود که متوجه شدم کتابخانه های جاوا اسکریپت یکی از مهم ترین مباحثی هستند که هر برنامه نویس وب برای ورود به بازار کار و کسب درآمد بهتر، راحت و بیشتر باید با آن ها کار کرده باشد                  </p>
                    <p className="introduction__text">
                      همان طور که از اسم این دوره مشخص است، هدف از این دوره آموزش 20 مورد از کاربردی ترین و پر استفاده ترین کتابخانه های جاوا اسکریپت است تا شما بتوانید بعد از این دوره با قدرت و آمادگی بیشتر ادامه مسیر برنامه نویسی وب را ادامه دهید، ری اکت یا نود یا … را راحت تر یاد بگیرید و در نهایت وارد بازار کار شده و کسب درآمد کنید.
                    </p>
                    <p className="introduction__text">
                      شا به عنوان یک برنامه نویس وب، حداقل اگر با کتابخانه خاصی کار نکرده باشید، باید بلد باشید که چطور باید یک کتابخانه جدید را یاد بگیرید. فرض کنید یک یک کتابخانه جدید ساخته شد. آیا شما باید منتظر دوره آموزشی باشید؟! قطعا نه.
                    </p>
                    <p className="introduction__text">
                      در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه، نحوه یادگیری یک کتابخانه جدید را نیز به شما عزیزان آموزش دهیم تا بعد از گذراندن دوره، دیگر وابسته هیچ دوره یا شخص خاصی نباشید و اگر کتابخانه جدیدی به دنیای جاوا اسکریپت و وب اضافه شد، به راحتی بتوانید آن را یاد بگیرید.
                    </p>
                </div>
              </div>
              
              <CommentTextArea/>

            </div>
          </div>
        
          <div className="col-4">
            <div className="courses-info">
              <div className="course-info">
                <div className="course-info__register">
                  <span className="course-info__register-title">
                    <i className="fas fa-graduation-cap course-info__register-icon"></i>
                    دانشجوی دوره هستید
                  </span>
                </div>
              </div>
              <div className="course-info">
                <div className="course-info__total">
                  <div className="course-info__top">
                    <div className="course-info__total-sale">
                      <i className="fas fa-user-graduate course-info__total-sale-icon"></i>
                      <span className="course-info__total-sale-text">
                        تعداد دانشجو :
                      </span>
                      <span className="course-info__total-sale-number">
                        178
                      </span>
                    </div>
                  </div>
                  <div className="course-info__bottom">
                    <div className="course-info__total-comment">
                      <i className="far fa-comments course-info__total-comment-icon"></i>
                      <span className="course-info__total-comment-text">
                        67 دیدگاه
                      </span>
                    </div>
                    <div className="course-info__total-view">
                      <i className="far fa-eye course-info__total-view-icon"></i>
                      <span className="course-info__total-view-text">
                        14,234 بازدید
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-info">
                <div className="course-info__header-short-url">
                  <i className="fas fa-link course-info__short-url-icon"></i>
                  <span className="course-info__short-url-text">
                    لینک کوتاه
                  </span>
                </div>
                <span className="course-info__short-url">
                  https://sabzlearn.ir/?p=117472
                </span>
              </div>
              <div className="course-info">
                <span className="course-info__topic-title">
                  سرفصل های دوره
                </span>
                <span className="course-info__topic-text">
                  برای مشاهده و یا دانلود دوره روی کلمه
                  <a href="#" style={{color:"blue", fontWeight: "bold"}}>
                    لینک
                  </a>
                  کلیک کنید
                </span>
              </div>
              <div className="course-info">
                <span className="course-info__courses-title">دوره های مرتبط</span>
                <ul className="course-info__courses-list">
                  <li className="course-info__courses-list-item">
                    <a href="#" className="course-info__courses-link">
                      <img src="/images/courses/js_project.png" alt="Course Cover" className="course-info__courses-img" />
                      <span className="course-info__courses-text">
                        پروژه های تخصصی با جاوا اسکریپت
                      </span>
                    </a>
                  </li>
                  <li className="course-info__courses-list-item">
                    <a href="#" className="course-info__courses-link">
                      <img src="/images/courses/fareelancer.png" alt="Course Cover" className="course-info__courses-img" />
                      <span className="course-info__courses-text">
                        تعیین قیمت پروژه های فریلنسری
                      </span>
                    </a>
                  </li>
                  <li className="course-info__courses-list-item">
                    <a href="#" className="course-info__courses-link">
                      <img src="/images/courses/nodejs.png" alt="Course Cover" className="course-info__courses-img" />
                      <span className="course-info__courses-text">
                        دوره Api نویسی
                      </span>
                    </a>
                  </li>
                  <li className="course-info__courses-list-item">
                    <a href="#" className="course-info__courses-link">
                      <img src="/images/courses/jango.png" alt="Course Cover" className="course-info__courses-img" />
                      <span className="course-info__courses-text">
                        متخصص جنگو
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

      <Footer/>
    </div>
  )
}

export default CourseInfo