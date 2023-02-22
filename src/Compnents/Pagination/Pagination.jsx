import React, { useEffect, useState } from 'react';
import "./Pagination.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Pagination = ({items ,itemsCount , pathname , setShownCourses}) => {

  const [pagesCount , setPagesCount] = useState(null)
  const {page} = useParams()

  useEffect(()=>{
  let endIndex = itemsCount * page
  let startIndex = endIndex - itemsCount
  let paginatedItem = items.slice(startIndex, endIndex)
  setShownCourses(paginatedItem)

  let pagesNumber = Math.ceil(items.length / itemsCount)
  setPagesCount(pagesNumber)
  } ,[page , items])

  return (
    <div>
        <div class="courses-pagination">
          <ul class="courses__pagination-list">

           {Array(pagesCount).fill(0).map((item,index) =>(
            <li class="courses__pagination-item">
               {index + 1 === Number(page) ? (
                <Link
                  to={`${pathname}/${index + 1}`}
                  className="courses__pagination-link courses__pagination-link--active"
                >
                  {index + 1}
                </Link>
                ) : (
                <Link
                  to={`${pathname}/${index + 1}`}
                  className="courses__pagination-link"
                >
                  {index + 1}
                </Link>
              )}
            </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Pagination