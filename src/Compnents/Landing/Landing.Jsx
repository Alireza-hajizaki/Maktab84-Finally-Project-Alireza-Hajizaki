import React from 'react';
import "./Landing.css";
import SearchIcon from '@mui/icons-material/Search';
import Typewriter from 'typewriter-effect';



const Landing = () => {
  return (
    <section className="landing">
      <div className="container">
        <h1 className="landing__title">
          <Typewriter
          onInit={(typewriter) => {
          typewriter.typeString('برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن!')
          .start()
          .pauseFor(2500)
          .deleteAll()
          .typeString('طراحی خوب بیش از آنکه هزینه به بار بیاره، ارزش‌آفرینی می‌کنه.')
          .start()
          .pauseFor(2500)
          .deleteAll()
          .typeString('زبانی که نحوهٔ نگاه شما به برنامه‌نویسی رو تحت‌ تأثیر قرار نده، ارزش یادگیری نداره.')
          .start()
          .pauseFor(2500)
          .deleteAll()
           }}

           options={{
            loop:true
           }}

          />
        </h1>
        <div className="landing__searchbar">
          <input type="text" className="landing__searchbar-input" placeholder="جستجو..." />
          <button className="landing__searchbar-btn" type="submit">
            <SearchIcon fontSize='large'/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Landing