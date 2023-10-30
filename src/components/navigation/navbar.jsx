import { NavLink } from 'react-router-dom'

import { useIsAuth, useLogout } from '../../app/hooks'

import '../../stylesheets/components/navigation/navbar.css'

function Navbar() {
  const isAuth = useIsAuth()

  const logout = useLogout()

  return (
    <div>
      <header className="nav__header">
        <NavLink className="logo " to={isAuth ? '/home' : '/'}>
          Logo
        </NavLink>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i>
        </label>

        <nav className="navbar">
          {isAuth ? (
            <NavLink to="/home" className="navbar__menu-link">
              Home
            </NavLink>
          ) : (
            <NavLink to="/" className="navbar__menu-link">
              Home
            </NavLink>
          )}
          {isAuth ? (
            <NavLink to="/tasks" className="navbar__menu-link">
              Tasks
            </NavLink>
          ) : (
            <NavLink to="/login" className="navbar__menu-link">
              Sign in
            </NavLink>
          )}
          {isAuth ? (
            <NavLink onClick={logout} className="navbar__menu-link">
              Logout
            </NavLink>
          ) : (
            <NavLink to="/register" className="navbar__menu-link">
              Sign up
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
