import React ,{useContext} from "react";
import { Link , useNavigate} from "react-router-dom";
import AuthContext from "../../../Context/authContext";
import swal from "sweetalert";


export default function Sidebar() {

  const authContext = useContext(AuthContext)
  const navigate = useNavigate()
  const logoutUser = (e) =>{
    e.preventDefault()
    swal({
      title:'آیا از خروج اطمینان دارید؟',
      icon:'warning',
      buttons:["نه" ,"آره"]
    }).then((resulte) =>{
        if(resulte){
              swal({
                title:"با موفقیت خارج شدید",
                icon:'success',
                buttons:'اوکی'
              }).then(() =>{
                  authContext.logout()
                  navigate('/')
                  window.location.reload(false)
              })
        }
    })
  }

  return (
    <div>
      <div class="sidebar">
        <span class="sidebar__name">{authContext.userInfos.name}</span>
        <ul class="sidebar__list">
          <li class="sidebar__item">
            <Link class="sidebar__link" to="/my-account">
              پیشخوان
            </Link>
          </li>
          <li class="sidebar__item">
            <Link class="sidebar__link" to="orders">
              سفارش
            </Link>
          </li>
          <li class="sidebar__item">
            <a class="sidebar__link" href="#">
              جزئیات حساب کاربری
            </a>
          </li>
          <li class="sidebar__item">
            <Link class="sidebar__link" to="courses">
              دوره های خریداری شده
            </Link>
          </li>
          <li class="sidebar__item" onClick={logoutUser}>
            <a class="sidebar__link" href="#">
              خروج از سیستم
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
