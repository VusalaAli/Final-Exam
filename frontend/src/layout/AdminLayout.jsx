import AdminNavbar from "./AdminNavbar"
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AdminLayout
