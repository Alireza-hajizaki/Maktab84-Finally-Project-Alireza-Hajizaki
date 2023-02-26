import React,{useState,useEffect} from 'react';
import ArticleBox from '../ArticleBox/ArticleBox';
import SectionHeader from '../SectionHeader/SectionHeader';
import axios from 'axios';

const LatestArticles = () => {

  const [articles , setArticles] = useState([])

  useEffect(()=>{
      const localStorageData = JSON.parse(localStorage.getItem('user'))
      axios.get('http://localhost:3001/v1/articles',{
          headers:{
              "Authorization" : `Bearer ${localStorageData.token}`
          }
      })
          .then(res => res.data)
          .then(data => setArticles(data))
          .catch(err => console.log(err))
  } ,[])


  return (
      <div>
          <section className="articles">
              <div className="container">
                  <SectionHeader title='جدیدترین مقاله ها'/>

                  <div className="articles__content">
                      <div className="row">
                          {articles.slice(0,3).map((article) => (
                              <div className='col-4'>
                                  <ArticleBox {...article}/>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default LatestArticles