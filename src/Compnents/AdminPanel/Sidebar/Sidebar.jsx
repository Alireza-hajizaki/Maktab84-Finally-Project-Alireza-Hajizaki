import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div id="sidebar" class="col-2">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <Link to="/">
            <img src="/images/logo/Logo-1.png" alt="Logo" className="sidebar_logo"/>
          </Link>
        </div>

        <div class="sidebar-menu-btn">
        </div>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li class="active-menu">
            <Link to="/p-admin">
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li>
            <Link to="courses">
              <span>دوره ها</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <span>منو ها</span>
            </a>
          </li>
          <li>
            <Link to="articles">
              <span>مقاله ها</span>
            </Link>
          </li>
          <li>
            <Link to="users">
              <span>کاربران</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <span>کدهای تخفیف</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>دسته‌بندی‌ها</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}