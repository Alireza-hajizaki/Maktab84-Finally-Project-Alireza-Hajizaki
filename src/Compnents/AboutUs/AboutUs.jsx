import React from 'react';
import "./AboutUs.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import AboutUsBox from '../AboutUsBox/AboutUsBox';
import CompareIcon from '@mui/icons-material/Compare';


const AboutUs = () => {
  return (
    <div>
      <div className="about-us">
        <div className="container">
          <SectionHeader title="درباره ما"/>

          <div className="container">
            <div className="row">
                <div className='col-6'>
                  <AboutUsBox
                  title="دوره های اختصاصی"
                  description="با پشتیبانی و کیفیت بالا ارائه میده  !"
                  logo={<CompareIcon sx={{ fontSize: 40 }}/>}
                  />
                </div>
                <div className='col-6'>
                  <AboutUsBox
                  title="دوره های اختصاصی"
                  description="با پشتیبانی و کیفیت بالا ارائه میده  !"
                  logo={<CompareIcon sx={{ fontSize: 40 }}/>}
                  />
                </div>
                <div className='col-6'>
                  <AboutUsBox
                  title="دوره های اختصاصی"
                  description="با پشتیبانی و کیفیت بالا ارائه میده  !"
                  logo={<CompareIcon sx={{ fontSize: 40 }}/>}
                  />
                </div>
                <div className='col-6'>
                  <AboutUsBox
                  title="دوره های اختصاصی"
                  description="با پشتیبانی و کیفیت بالا ارائه میده  !"
                  logo={<CompareIcon sx={{ fontSize: 40 }}/>}
                  />
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs