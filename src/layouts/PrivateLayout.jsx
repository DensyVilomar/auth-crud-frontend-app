import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateLayout() {
  const isAuth = useSelector((state) => state.auth.token)
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateLayout
