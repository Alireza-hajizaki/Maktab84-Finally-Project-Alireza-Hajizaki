import React ,{useContext} from "react";
import { Link , useNavigate } from "react-router-dom";
import './Sidebar.css'
import AuthContext from '../../../Context/authContext'
import swal from "sweetalert";
import { useParams } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const {"*":param} = useParams()

  const logoutAdmin = (e)=>{
    e.preventDefault()
    swal({
      title:'با موفقیت خارج شدید :)',
      icon:'success',
      buttons:"اوکی"
    }).then(() =>{
      authContext.logout()
      navigate('/')
      window.location.reload(false)
    })
}
  

  return (
    <div id="sidebar" className="col-2">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Link to="/">
            <img src="/images/logo/Logo-1.png" alt="Logo" className="sidebar_logo"/>
          </Link>
        </div>
        <div className="sidebar-menu-btn">
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li className={param === "" ? "active-menu" : ""}>
            <Link to="/p-admin">
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li className={param === "courses" ? "active-menu" : ""}>
            <Link to="courses">
              <span>دوره ها</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <span>منو ها</span>
            </a>
          </li>
          <li className={param === "articles" ? "active-menu" : ""}>
            <Link to="articles">
              <span>مقاله ها</span>
            </Link>
          </li>
          <li className={param === "users" ? "active-menu" : ""}>
            <Link to="users">
              <span>کاربران</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <span>کدهای تخفیف</span>
            </a>
          </li>
          <li className={param === "category" ? "active-menu" : ""}>
            <Link to="category">
              <span>دسته‌بندی‌ها</span>
            </Link>
          </li>
          <li>
            <a href="#" onClick={logoutAdmin}>
              <span>خروج</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}