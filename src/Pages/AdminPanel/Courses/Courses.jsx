import React ,{useState,useEffect} from 'react'
import DataTable from '../../../Compnents/AdminPanel/DataTable/DataTable'

const Courses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('user'))
    fetch('http://localhost:3001/v1/courses',{
      method:'GET',
      headers:{
         "Authorization" : `Bearer ${localStorageData.token}`
      },
    }).then(res => res.json())
    .then(data => {
      setCourses(data)
    })
  }, []);

  return (
    <div>
      <DataTable title="دوره‌ها">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>لینک</th>
              <th>مدرس</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course,index) => (
              <tr>
                <td>{index+1}</td>
                <td>{course.name}</td>
                <td>{course.price === 0 ? 'رایگان' : course.price.toLocaleString()}</td>
                <td>{course.isComplete === 0 ? 'در حال برگزاری' : 'تکمیل شده'}</td>
                <td>{course.shortName}</td>
                <td>{course.creator.name}</td>
                <td>
                  <button type="button" className="btn btn-primary edit-btn">
                    ویرایش
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger delete-btn">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </div>
  )
}

export default Courses