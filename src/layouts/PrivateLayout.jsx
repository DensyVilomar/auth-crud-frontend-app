import { useEffect } from 'react'
import { useIsAuth } from '../app/hooks'
import { useDispatch } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { setUserInfo } from '../features/auth/authSlice'
import { useMyInfoQuery } from '../features/auth/authApiSlice'

function PrivateLayout() {
  const isAuth = useIsAuth()

  const dispatch = useDispatch()

  const { data, isLoading } = useMyInfoQuery()

  useEffect(() => {
    if (!localStorage.getItem('userInfo') && !isLoading && data) {
      localStorage.setItem('userInfo', JSON.stringify(data))
      dispatch(setUserInfo(data))

      window.location.reload()
    }
  }, [data, dispatch, isLoading])

  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateLayout
