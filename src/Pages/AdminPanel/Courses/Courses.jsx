import React ,{useState,useEffect} from 'react'
import DataTable from '../../../Compnents/AdminPanel/DataTable/DataTable'
import swal from 'sweetalert';
import axios from 'axios';
import ModalEdit from '../../../Compnents/Modal/Modal';


const Courses = () => {

  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);
  const [courseData , setCourseData] = useState([])

  useEffect(()=>{
    const localStorageData = JSON.parse(localStorage.getItem('user'))
    axios.get(`http://localhost:3001/v1/courses`,{
        headers:{
            "Authorization" : `Bearer ${localStorageData.token}`
        }
    })
    .then(res => {
      setCourses(res.data)
    })
} ,[])

const removeUser = (courseId) => {
  
  swal({
    title: "آیا از حذف مطمئنی؟",
    icon: "warning",
    buttons: ["نه","آره"]
  }).then(resulte => {
    if(resulte){
      const newCourses = courses.filter(course => {
      return course._id !== courseId
      })
      setCourses(newCourses)
    }
  })
}

const editUser = (e) => {
  setShow(true)
  setCourseData(e)
}


  return (
    <div>
      <ModalEdit 
      show={show} 
      setShow={setShow} 
      value={courseData} 
      />
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
                  <button type="button" className="btn btn-primary edit-btn" onClick={() => editUser(course)}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger delete-btn" onClick={() => removeUser(course._id)}>
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