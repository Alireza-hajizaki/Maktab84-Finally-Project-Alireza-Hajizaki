import React ,{useState,useEffect} from 'react'
import DataTable from '../../../Compnents/AdminPanel/DataTable/DataTable'
import swal from 'sweetalert';
import axios from 'axios';
import ModalEdit from '../../../Compnents/Modal/Modal';

const Courses = () => {

  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);
  const [courseData , setCourseData] = useState([])
  const [newCourse , setNewCourse] = useState({
    name:"",
    price: "",
    isComplete:0 ,
    shortName:"",
    creator:{name:""}
  })

  useEffect(()=>{
   getAllCourses()
} ,[])

function getAllCourses() {
  const localStorageData = JSON.parse(localStorage.getItem('user'))
    axios.get(`http://localhost:3001/v1/courses`,{
        headers:{
            "Authorization" : `Bearer ${localStorageData.token}`
        }
    })
    .then(res => {
      setCourses(res.data)
  })
}

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

const addCourses = (e) => {
  e.preventDefault()
  // setCourses(courses => [...courses, x])
  setCourses(courses.concat(newCourse))
}



  return (
    <div>
      <ModalEdit 
      show={show} 
      setShow={setShow} 
      value={courseData} 
      />
      <div className="home-content-edit">
        <div className="back-btn">
          <i className="fas fa-arrow-right"></i>
        </div>
        <form className="form">
          <div className="col-6">
            <div className="name input">
              <label className="input-title">عنوان</label>
              <input
                type="text"
                id="title"
                onChange={(e) => {setNewCourse({...newCourse , name: e.target.value})}}
                placeholder="لطفا عنوان درسی خود را وارد کنید..."
              />
              <span className="error-message text-danger"></span>
            </div>
          </div>
          <div className="col-6">
            <div className="family input">
              <label className="input-title">مبلغ</label>
              <input
                type="text"
                id="price"
                onChange={(e) => {setNewCourse({...newCourse , price: e.target.value})}}
                placeholder="لطفا مبلغ هزینه شده برای دوره را وارد کنید..."
              />
              <span className="error-message text-danger"></span>
            </div>
          </div>
          <div className="col-6">
            <div className="email input">
              <label className="input-title">وضعیت</label>
              <input
                type="text"
                id="Condition"
                onChange={(e) => {setNewCourse({...newCourse , isComplete: e.target.value})}}
                placeholder="لطفا وضعیت دوره را وارد کنید(درحال برگزاری:0 & تکمیل:1)"
              />
              <span className="error-message text-danger"></span>
            </div>
          </div>
          <div className="col-6">
            <div className="password input">
              <label className="input-title">لینک</label>
              <input
                type="text"
                id="link"
                onChange={(e) => {setNewCourse({...newCourse , shortName: e.target.value})}}
              />
              <span className="error-message text-danger"></span>
            </div>
          </div>
          <div className="col-6">
            <div className="phone input">
              <label className="input-title">مدرس</label>
              <input
                type="text"
                id="teach"
                placeholder="لطفا نام مدرس را وارد کنید..."
                onChange={(e) => {setNewCourse({...newCourse , creator: {name: e.target.value}})}}
              />
              <span className="error-message text-danger"></span>
            </div>
          </div>
          <div className="col-12">
            <div className="bottom-form">
              <div className="submit-btn">
                <input type="submit" value="افزودن" onClick={addCourses}/>
              </div>
            </div>
          </div>
        </form>
      </div>
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