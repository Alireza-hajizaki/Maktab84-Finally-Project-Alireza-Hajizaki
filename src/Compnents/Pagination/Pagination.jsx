import React from 'react';
import "./Pagination.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Pagination = () => {
  return (
    <div>
        <div class="courses-pagination">
          <ul class="courses__pagination-list">
            <li class="courses__pagination-item">
              <a href="#" class="courses__pagination-link">
              <ArrowForwardIcon/>
              </a>
            </li>
            <li class="courses__pagination-item">
              <a href="#" class="courses__pagination-link courses__pagination-link--active">
                1
              </a>
            </li>
            <li class="courses__pagination-item">
              <a href="#" class="courses__pagination-link">
                2
              </a>
            </li>
            <li class="courses__pagination-item">
              <a href="#" class="courses__pagination-link">
                3
              </a>
            </li>
            <li class="courses__pagination-item">
              <a href="#" class="courses__pagination-link">
              <ArrowBackIcon/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Pagination