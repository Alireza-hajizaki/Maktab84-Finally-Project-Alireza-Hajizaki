import Index from "./Pages/Index/Index";
import Category from "./Pages/Category/Category";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Courses from "./Pages/Courses/Courses";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";


const routes =[
  { path: "/" , element: <Index/> },
  { path: "/category-info/:categoryName" , element: <Category/>  },
  { path: "/article-info/:articleName" , element:  <ArticleInfo/> },
  { path: "/course-info/:courseName" , element: <CourseInfo/> },
  { path: "/courses" , element: <Courses/> },
  { path: "/login" , element: <Login/> },
  { path: "/register" , element: <Register/> },
]

export default routes;