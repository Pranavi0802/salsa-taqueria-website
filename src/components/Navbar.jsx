import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav">
      <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/menu">
        Menu
      </NavLink>
      <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/reviews">
        Reviews
      </NavLink>
      <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/contact">
        Contact
      </NavLink>
    </nav>
  )
}

export default Navbar
