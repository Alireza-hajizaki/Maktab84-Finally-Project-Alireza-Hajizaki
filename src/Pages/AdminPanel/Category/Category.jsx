import React, { useEffect, useState } from 'react';
import DataTable from '../../../Compnents/AdminPanel/DataTable/DataTable';
import axios from 'axios';

const Category = () => {

    // const[categories , setCategories] = useState([]);

    // useEffect(()=> {
    //     const localStorageData = JSON.parse(localStorage.getItem('user'))
    //     axios.get(`http://localhost:3001/v1/category`,{
    //     headers:{
    //         "Authorization" : `Bearer ${localStorageData.token}`
    //     }
    //     }).then(allCategory => {
    //     console.log(allCategory);
    //     })
    // } ,[])

  return (
    <>
      <DataTable title='دسته بندی ها'>
        <table class="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                <td>1</td>
                <td>برنامه نویسی فرانت اند</td>
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
          </tbody>
        </table>
      </DataTable>
    </>
    )
}

export default Category