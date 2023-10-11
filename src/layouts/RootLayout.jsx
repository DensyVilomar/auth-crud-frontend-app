import { Outlet } from 'react-router-dom'
import LogoutBtn from '../components/auth/logoutBtn'

function RootLayout() {
  return (
    <div>
      <nav>Navbar</nav>
      <main>
        <Outlet />
      </main>
      <LogoutBtn />
      <footer>Footer</footer>
    </div>
  )
}

export default RootLayout
