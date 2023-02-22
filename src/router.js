import Index from "./Pages/Index/Index";
import Category from "./Pages/Category/Category";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Courses from "./Pages/Courses/Courses";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import AdminPanel from "./Pages/AdminPanel/index"
import Users from "./Pages/AdminPanel/Users/Users";
import AdminCourses from "./Pages/AdminPanel/Courses/Courses";
import AdminArticle from "./Pages/AdminPanel/Articles/Articles";
import NotFound from './Pages/NotFound/NotFound'


const routes =[
  { path: "/" , element: <Index/> },
  { path: "/category-info/:categoryName" , element: <Category/>  },
  { path: "/article-info/:articleName" , element:  <ArticleInfo/> },
  { path: "/course-info/:courseName" , element: <CourseInfo/> },
  { path: "/courses/:page" , element: <Courses/> },
  { path: "/login" , element: <Login/> },
  { path: "/register" , element: <Register/> },
  { path: '/not-found', element:<NotFound/>},
  { path: "/p-admin/*", element: <AdminPanel />, children:[
    {path: 'users' , element: <Users/>},
    {path: 'courses', element: <AdminCourses/>},
    {path: 'articles', element: <AdminArticle/>}
  ] }
]

export default routes;