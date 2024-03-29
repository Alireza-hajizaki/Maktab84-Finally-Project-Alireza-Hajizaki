import "./NavBar.css"
import React, { useContext ,useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AuthContext from '../../Context/authContext'
import {Link} from 'react-router-dom';

const NavBar = () => {

  const authContext = useContext(AuthContext);
  const [allMenus, setAllMenus] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        setAllMenus(menus);
      });
  }, []);

  const userRole = authContext.role

  return (
    <div className="main-header">
        <div className="container-fluid">
          <div className="main-header__content">
            <div className="main-header__right">
              <img src="/images/logo/logo-1.png" className="main-header__logo" alt="Blue learn logo" />

              <ul className="main-header__menu">
                <li className="main-header__item">
                  <Link to="/" className="main-header__link">صفحه اصلی</Link>
                </li>

                {allMenus.map((menu) => (
                <li className="main-header__item" key={menu._id}>
                  <Link to={menu.href} className="main-header__link">
                    {menu.title}
                    {menu.submenus.length !== 0 && (
                      <>
                        <KeyboardArrowDownIcon fontSize='large'/>
                        <ul className="main-header__dropdown">
                          {menu.submenus.map((submenu) => (
                            <li className="main-header__dropdown-item">
                              <Link
                                to={submenu.href}
                                className="main-header__dropdown-link"
                              >
                               {
                                 submenu.title
                               }
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Link>
                </li>
              ))}
              </ul>
            </div>

            <div className="main-header__left">
              <Link to={userRole == 'ADMIN' ? ("/p-admin"):('/not-found')} className="main-header__search-btn">
                <AdminPanelSettingsIcon sx={{ fontSize: 40 }}/>
              </Link>
              <a href="#" className="main-header__cart-btn">
                <ShoppingCartIcon sx={{ fontSize: 40 }}/>
              </a>

              {authContext.isLoggedIn ? (
               <Link to={userRole == 'USER' ? ("/my-account"):('/not-found')} className="main-header__profile">
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