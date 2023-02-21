import React, {useState} from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import routes from './router';
import { useSelector} from 'react-redux'
import AuthContext from './Context/authContext';

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const [token , setToken] = useState(false)
  const [userInfos , setUserInfos] = useState({})

  const login =(token) => {
    setToken(token)
    localStorage.setItem('user' , JSON.stringify({token}))
  }
  const logout = () =>{
    setToken(null)
    setUserInfos({})
    localStorage.removeItem('user')
  }

  const router = useRoutes(routes)

  const courses = useSelector((store) => store.courseInfo)
  console.log(courses)

  return (
    <div className='App'>
    <AuthContext.Provider value={{
       isLoggedIn : isLoggedIn,
       token: token,
       userInfos: userInfos,
       login,
       logout,
    }}>
      {router}
    </AuthContext.Provider>
    </div>
  );
}

export default App;
