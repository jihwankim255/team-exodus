import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/index'
import Header from './Header'

const PageLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export default PageLayout
