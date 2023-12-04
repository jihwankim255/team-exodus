import { Outlet } from 'react-router-dom'
import Footer from './Footer/index'
import Header from './Header/index'

const PageLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export default PageLayout
