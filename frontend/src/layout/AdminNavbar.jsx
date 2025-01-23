import { NavLink } from "react-router-dom"

const AdminNavbar = () => {
  return (
    <>
             <nav>
        <ul>
          <li>
            <NavLink to="/admin">Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin/add">Add</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default AdminNavbar
