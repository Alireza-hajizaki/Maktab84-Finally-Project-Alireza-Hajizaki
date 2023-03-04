import React, { useEffect, useState } from 'react'
import DataTable from '../../../Compnents/AdminPanel/DataTable/DataTable'
import axios from 'axios'

export default function Articles() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('user'))
    axios.get(`http://localhost:3001/v1/articles`,{
        headers:{
            "Authorization" : `Bearer ${localStorageData.token}`
        }
    }).then(allArticles => {
        console.log(allArticles);
        setArticles(allArticles.data)
      })
  }, [])

  return (
    <>
      <DataTable title="مقاله‌ها"
      >
         <table class="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>لینک</th>
              <th>نویسنده</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{article.title}</td>
                <td>{article.shortName}</td>
                <td>{article.creator.name}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary edit-btn"
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger delete-btn"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </>
  )
}