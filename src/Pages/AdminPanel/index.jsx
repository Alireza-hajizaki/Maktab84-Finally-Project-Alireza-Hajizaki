import React from "react";
import './index.css';
import { Outlet } from "react-router-dom";
import Sidebar from "../../Compnents/AdminPanel/Sidebar/Sidebar";
import Topbar from "../../Compnents/AdminPanel/Topbar/Topbar";

export default function index() {
  return (
    <>
      <div id="content">
          <Sidebar />
          
          <div id="home" class="col-10">
          <Topbar />

          <div class="container-fluid" id="home-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}