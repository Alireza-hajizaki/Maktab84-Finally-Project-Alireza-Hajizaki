import React from 'react';
import ArticleBox from '../ArticleBox/ArticleBox';
import SectionHeader from '../SectionHeader/SectionHeader';

const LatestArticles = () => {
  return (
    <div>
        <section className="articles">
          <div className="container">
            <SectionHeader title='جدیدترین مقاله ها'/>

            <div className="articles__content">
              <div className="row">
                <div className='col-4'>
                <ArticleBox
                title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
                desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
                img="images/blog/3.jpg"
                />
                </div>
                <div className='col-4'>
                <ArticleBox
                title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
                desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
                img="images/blog/3.jpg"
                />
                </div>
                <div className='col-4'>
                <ArticleBox
                title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
                desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
                img="images/blog/3.jpg"
                />
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default LatestArticles