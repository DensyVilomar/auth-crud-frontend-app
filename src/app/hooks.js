import { logout } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'

export const useIsAuth = () => {
  const isAuthenticated = useSelector((state) => state.auth.token)

  return isAuthenticated
}

export const useUserInfo = () => {
  const userInfo = useSelector((state) => state.auth.user)

  return userInfo
}

export const useLogout = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())

    window.location.reload()
  }

  return handleLogout
}
