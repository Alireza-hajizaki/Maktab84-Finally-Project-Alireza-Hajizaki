import React from 'react';
import './index.css';
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import Sidebar from '../../Compnents/UserPanel/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const index = () => {
  return (
    <div>
        <Header/>
        
        <section class="content">
        <div class="content-header">
                <span class="content-header__title">پنل کاربری من</span>
        </div>
        <div class="content-main">
            <div class="container total_container">
                <div class="row">
                    <div className="col-3">
                      <Sidebar />
                    </div>
                    <div className="col-9">
                      <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </section>

        <Footer/>
    </div>
  )
}

export default index