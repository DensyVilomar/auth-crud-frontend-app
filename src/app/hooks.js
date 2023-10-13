import { useSelector } from 'react-redux'

export const useIsAuth = () => {
  const isAuthenticated = useSelector((state) => state.auth.token)

  return isAuthenticated
}

export const useUserInfo = () => {
  const userInfo = useSelector((state) => state.auth.user)

  if (userInfo) {
    return userInfo
  }
}
