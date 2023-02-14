import React from 'react'
import Landing from '../Landing/Landing'
import NavBar from '../Navbar/NavBar'
import TopBar from '../TopBar/TopBar'

const Header = () => {
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <Landing/>
    </div>
  )
}

export default Header