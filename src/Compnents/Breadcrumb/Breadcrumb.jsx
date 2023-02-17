import React from 'react';
import './Breadcrumb.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Breadcrumb = ({links}) => {
  return (
    <div>
        <section className="breadcrumb">
      <div className="container">
        <div className="breadcrumb__content">
          <div className="breadcrumb__home-content-icon">
          <HomeIcon fontSize='large'/>
          </div>
          <ul className="breadcrumb__list">
           {links.map((link) => (
            <li className="breadcrumb__item">
            <Link to={`/${link.to}`} className="breadcrumb__link">
              {link.title}
              {link.id !== links.length ?
              (<ArrowBackIosIcon/>): null}
            </Link>
          </li>
           ))}
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Breadcrumb