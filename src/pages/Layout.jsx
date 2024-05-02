import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import { Outlet, Link } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
        <MyNavbar></MyNavbar>
        <Outlet />
        <MyFooter></MyFooter>
    </div>
  )
}

export default Layout