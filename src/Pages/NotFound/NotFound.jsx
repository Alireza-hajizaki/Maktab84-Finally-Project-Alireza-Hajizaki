import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h1 className='notfound_title'>404 Error Page</h1>
      <p className="zoom-area">The page you were looking for could not be <b>found</b></p>
      <p className="zoom-area">Back to previous page...</p>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <Link to="/" class="more-link">Visit the origina page</Link>
      </div>
    </div>
  )
}

export default NotFound