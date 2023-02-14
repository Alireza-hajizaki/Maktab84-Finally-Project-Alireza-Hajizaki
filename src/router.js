import Index from "./Pages/Index/Index";
import Category from "./Pages/Category/Category";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";


const routes =[
  { path: "/" , element: <Index/> },
  { path: "/category-info/:categoryName" , element: <Category/>  },
  { path: "/article-info/:articleName" , element:  <ArticleInfo/> },
  { path: "/course-info/:courseName" , element: <CourseInfo/> },
]

export default routes;