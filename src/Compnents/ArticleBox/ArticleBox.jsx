import React from 'react';
import "./ArticleBox.css";
import { Link } from 'react-router-dom';

const ArticleBox = ({title , desciption , cover , shortName}) => {
  return (
    <div>
    <div>
        <div className="article-card">
            <div className="article-card__header">
                <Link to={`/article-info/${shortName}`} className="article-card__link-img">
                    <img src={cover} className="article-card__img" alt="Article Cover" />
                </Link>
            </div>
            <div className="article-card__content">
                <Link to={`/article-info/${shortName}`} className="article-card__link">
                    {title}
                </Link>
                <p className="article-card__text">
                    {desciption}
                </p>
                <Link to={`/article-info/${shortName}`} className="article-card__btn">بیشتر بخوانید</Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default ArticleBox