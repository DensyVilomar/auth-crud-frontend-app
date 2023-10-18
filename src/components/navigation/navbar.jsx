import { NavLink } from 'react-router-dom'
import { useIsAuth, useLogout } from '../../app/hooks'

function Navbar() {
  const isAuth = useIsAuth()

  const logout = useLogout()

  return (
    <div>
      <header className="nav__header">
        <nav className="navbar">
          <NavLink className="logo" to={isAuth ? '/home' : '/'}>
            Logo
          </NavLink>
          <ul className="navbar__menu">
            {isAuth ? (
              <li className="navbar__menu-item">
                <NavLink to="/home" className="navbar__menu-link">
                  home
                </NavLink>
              </li>
            ) : (
              <li className="navbar__menu-item">
                <NavLink to="/" className="navbar__menu-link">
                  home
                </NavLink>
              </li>
            )}
            {isAuth ? (
              <li className="navbar__menu-item">
                <NavLink to="/tasks" className="navbar__menu-link">
                  tasks
                </NavLink>
              </li>
            ) : (
              <li className="navbar__menu-item">
                <NavLink to="/login" className="navbar__menu-link">
                  login
                </NavLink>
              </li>
            )}
            {isAuth ? (
              <li className="navbar__menu-item">
                <NavLink onClick={logout} className="navbar__menu-link">
                  logout
                </NavLink>
              </li>
            ) : (
              <li className="navbar__menu-item">
                <NavLink to="/register" className="navbar__menu-link">
                  register
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
