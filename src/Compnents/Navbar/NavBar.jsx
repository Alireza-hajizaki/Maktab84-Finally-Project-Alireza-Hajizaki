import "./NavBar.css"
import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AuthContext from '../../Context/authContext'
import {Link} from 'react-router-dom';

const NavBar = () => {

  const authContext = useContext(AuthContext)

  return (
    <div className="main-header">
        <div className="container-fluid">
          <div className="main-header__content">
            <div className="main-header__right">
              <img src="/images/logo/logo-1.png" className="main-header__logo" alt="Blue learn logo" />

              <ul className="main-header__menu">
                <li className="main-header__item">
                  <a href="#" className="main-header__link">صفحه اصلی</a>
                </li>

                <li className="main-header__item">
                  <a href="#" className="main-header__link">فرانت اند
                    <KeyboardArrowDownIcon fontSize='large'/>
                    <ul className="main-header__dropdown">
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">آموزش Html</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">آموزش Css</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">آموزش جاوا اسکریپت</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">آموزش FlexBox</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">آموزش جامع ری‌اکت</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li className="main-header__item">
                  <a href="#" className="main-header__link">امنیت
                  <KeyboardArrowDownIcon fontSize='large'/>
                    <ul className="main-header__dropdown">
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">آموزش کالی لینوکس</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">آموزش پایتون سیاه</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">آموزش جاوا اسکریپت سیاه</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">آموزش شبکه</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li className="main-header__item">
                  <a href="#" className="main-header__link">مقالات
                  <KeyboardArrowDownIcon fontSize='large'/>
                    <ul className="main-header__dropdown">
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">توسعه وب</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">جاوا اسکریپت</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">فرانت اند</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li className="main-header__item">
                  <a href="#" className="main-header__link">پایتون
                   <KeyboardArrowDownIcon fontSize='large'/>
                    <ul className="main-header__dropdown">
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">دوره متخصص پایتون</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">دوره هوش مصنوعی با پایتون</a>
                      </li>
                      <li className="main-header__dropdown-item">
                        <a href="#" className="main-header__dropdown-link">دوره متخصص جنگو</a>
                      </li>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>

            <div className="main-header__left">
              <a href="#" className="main-header__search-btn">
                <SearchIcon sx={{ fontSize: 40 }} />
              </a>
              <a href="#" className="main-header__cart-btn">
                <ShoppingCartIcon sx={{ fontSize: 40 }}/>
              </a>

              {authContext.isLoggedIn ? (
               <Link to="#" className="main-header__profile">
               <span className="main-header__profile-text">{authContext.userInfos.name}</span>
              </Link>
              ):(
                <Link to="/login" className="main-header__profile">
                <span className="main-header__profile-text">ورود/ثبت نام</span>
                </Link>
              )
            }
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default NavBar