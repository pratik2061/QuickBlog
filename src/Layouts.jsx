import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Layouts() {
  return (
   <>
   <NavBar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layouts