import { NavLink } from "react-router-dom"

const MainNavbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp" alt="" />
        </div>
        <div className="nav-list">
        <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/basket">Basket</NavLink>
          </li>
        </ul>
      </nav>
        </div>
        
    </div>
       
    </>
  )
}

export default MainNavbar
