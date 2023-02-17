import React from 'react';

const FooterItem = ({title , children}) => {
  return (
    <div>
        <div className="footer-widgets__item">
            <span className="footer-widgets__title">
            {title}
            </span>
            {children}
        </div>
    </div>
  )
}

export default FooterItem