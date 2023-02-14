import React from 'react';
import "./TopBar.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import MdPhone from '@mui/icons-material/Phone';

const TopBar = () => {
  return (
    <div className="top-bar">
    <div className="container-fluid">
      <div className="top-bar__content">
        <div className="top-bar__right">
          <ul className="top-bar__menu">
            <li className="top-bar__item">
              <a href="https://linkedin.com" className="top-bar__link"><LinkedInIcon fontSize="large" /></a>
            </li>
            <li className="top-bar__item">
              <a href="https://instagram.com" className="top-bar__link"><InstagramIcon fontSize="large" /></a>
            </li>
            <li className="top-bar__item">
              <a href="https://youtube.com" className="top-bar__link"><YouTubeIcon fontSize="large" /></a>
            </li>
            <li className="top-bar__item">
              <a href="https://twitter.com" className="top-bar__link"><TwitterIcon fontSize="large" /></a>
            </li>
            <li className="top-bar__item">
              <a href="https://facebook.com" className="top-bar__link"><FacebookIcon fontSize="large" /></a>
            </li>
          </ul>
        </div>
        <div className="top-bar__left">
          <div className="top-bar__email">
            <a href="#" className="top-bar__email-text top-bar__link">
              ShahramHz@yahoo.com
            </a>
            <EmailIcon fontSize="large"/>
            
          </div>
          <div className="top-bar__phone">
            <a href="#" className="top-bar__phone-text top-bar__link">
              09902226331
            </a>
            <MdPhone fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopBar