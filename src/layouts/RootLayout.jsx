import { useIsAuth } from '../app/hooks'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/navbar'
import LogoutBtn from '../components/auth/logoutBtn'

function RootLayout() {
  const isAuth = useIsAuth()

  return (
    <div>
      <Navbar />

      {isAuth ? <LogoutBtn /> : null}

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  )
}

export default RootLayout
