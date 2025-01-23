import Footer from "./Footer";
import MainNavbar from "./MainNavbar"
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <MainNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout
