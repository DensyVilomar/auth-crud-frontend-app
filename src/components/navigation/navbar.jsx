import { NavLink } from 'react-router-dom'
// import { useState } from 'react'

import { useIsAuth, useLogout } from '../../app/hooks'

import '../../stylesheets/components/navigation/navbar.css'

function Navbar() {
  // const [menuOpened, setMenuOpened] = useState(true)

  const isAuth = useIsAuth()

  const logout = useLogout()

  // const handleClick = (e) => {
  //   setMenuOpened(!menuOpened)
  // }

  return (
    <div>
      <header className="nav__header">
        <NavLink className="logo " to={isAuth ? '/home' : '/'}>
          Logo
        </NavLink>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <box-icon name="menu" id="menu-icon"></box-icon>
          <box-icon name="x" id="close-icon"></box-icon>
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
              Login
            </NavLink>
          )}
          {isAuth ? (
            <NavLink onClick={logout} className="navbar__menu-link">
              Logout
            </NavLink>
          ) : (
            <NavLink to="/register" className="navbar__menu-link">
              Register
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
