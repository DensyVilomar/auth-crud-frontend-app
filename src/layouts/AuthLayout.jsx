import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

function AuthLayout() {
  const isAuth = useSelector((state) => state.auth.token)
  return isAuth ? <Navigate to="/home" /> : <Outlet />
}

export default AuthLayout
