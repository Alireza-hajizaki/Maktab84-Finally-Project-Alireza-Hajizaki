import React ,{useState,useEffect} from 'react'
import DataTable from '../../../Compnents/AdminPanel/DataTable/DataTable'
import Input from '../../../Compnents/Form/Input'
import {useForm} from '../../../Hook/useForm'
import {requiredValidator, minValidator, maxValidator, emailValidator } from '../../../validators/rulse'

const Users = () => {

  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const localStorageData = JSON.parse(localStorage.getItem("user"));
  //   console.log(localStorageData.token);
  //   fetch(`http://localhost:3001/v1/users`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${localStorageData.token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((allUsers) => {
  //       console.log(allUsers);
  //       setUsers(allUsers);
  //     });
  // }, []);


const [formState, onInputHandler] = useForm(
  {
    name: {
      value: "",
      isValid: false,
    },
    username: {
      value: "",
      isValid: false,
    },
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
    phone: {
      value: "",
      isValid: false,
    },
  },
  false
);

useEffect(() => {
  getAllUsers();
}, []);

function getAllUsers() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  fetch(`http://localhost:3001/v1/users`, {
    headers: {
      Authorization: `Bearer ${localStorageData.token}`,
    },
  })
    .then((res) => res.json())
    .then((allUsers) => {
      console.log(allUsers);
      setUsers(allUsers);
    });
}

const registerNewUser = (event) => {
  event.preventDefault();
  const newUserInfo = {
    name: `${formState.inputs.name.value}`,
    username: formState.inputs.username.value,
    email: formState.inputs.email.value,
    phone: formState.inputs.phone.value,
    password: formState.inputs.password.value,
    confirmPassword: formState.inputs.password.value,
  };

  fetch('http://localhost:3001/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUserInfo)
  }).then(res => {
    console.log(res);
    res.json()
  }).then(result => {
    console.log(result);
    getAllUsers()
  })

}
  return (
    <div>
      <div class="home-content-edit">
        <div class="back-btn">
          <i class="fas fa-arrow-right"></i>
        </div>
        <form class="form">
          <div class="col-6">
            <div class="name input">
              <label class="input-title">نام و نام خانوادگی</label>
              <Input
                type="text"
                className=""
                id="name"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا نام و نام خانوادگی کاربر را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>
          <div class="col-6">
            <div class="family input">
              <label class="input-title">نام کاربری</label>
              <Input
                type="text"
                className=""
                id="username"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا نام کاربری را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>
          <div class="col-6">
            <div class="email input">
              <label class="input-title">ایمیل</label>
              <Input
                type="text"
                className=""
                id="email"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا ایمیل کاربر را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>
          <div class="col-6">
            <div class="password input">
              <label class="input-title">رمز عبور</label>
              <Input
                type="text"
                className=""
                id="password"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا رمز عبور کاربر را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>
          <div class="col-6">
            <div class="phone input">
              <label class="input-title">شماره تلفن</label>
              <Input
                type="text"
                className=""
                id="phone"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا شماره تلفن کاربر را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>
          <div class="col-12">
            <div class="bottom-form">
              <div class="submit-btn">
                <input type="submit" value="افزودن" onClick={registerNewUser} />
              </div>
            </div>
          </div>
        </form>
      </div>
       <DataTable title="کاربران">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>شماره</th>
              <th>ایمیل</th>
              <th>رمز عبور</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>34223</td>
              <td>علی</td>
              <td>سعیدی</td>
              <td>09123443243</td>
              <td>ali@gmail.com</td>
              <td>ehsan1323</td>
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
          </tbody>
        </table>
      </DataTable>
    </div>
  )
}

export default Users