import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import routes from './router';
import AuthContext from './Context/authContext';

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const [token , setToken] = useState(false)
  const [role , setRole] = useState('')
  const [userInfos , setUserInfos] = useState({})
  
 
  const login =useCallback((userInfo, token) => {
    setToken(token)
    setIsLoggedIn(true)
    setUserInfos(userInfo)
    localStorage.setItem('user' , JSON.stringify({token}))
  },[])

  const logout = useCallback(() =>{
    setToken(null)
    setUserInfos({})
    localStorage.removeItem('user')
  },[])

  useEffect(() =>{
    const localStorageData = JSON.parse(localStorage.getItem('user'));
    if(localStorageData){
      fetch(`http://localhost:3001/v1/auth/me`,{
        headers:{
          Authorization : `Bearer ${localStorageData.token}`
        },
      }).then(res => res.json())
      .then(userData => {
        setIsLoggedIn(true)
        setUserInfos(userData)
        setRole(userData.role)
      })
    }else{
      setIsLoggedIn(false)
    }
  } ,[login , logout])

  const router = useRoutes(routes)

  return (
    <div className='App'>
    <AuthContext.Provider value={{
       isLoggedIn : isLoggedIn,
       token: token,
       role: role,
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
