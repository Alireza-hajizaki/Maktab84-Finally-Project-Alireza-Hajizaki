import React from 'react';
import "./SectionHeader.css";

const SectionHeader = ({title}) => {
  return (
    <div>
        <h3 className="section-title">{title}</h3>
    </div>
  )
}

export default SectionHeader