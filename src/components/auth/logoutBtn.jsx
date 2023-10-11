import { useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(logout())
    window.location.reload()
  }

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default LogoutBtn
