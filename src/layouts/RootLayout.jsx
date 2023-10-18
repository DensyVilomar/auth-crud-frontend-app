import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/navbar'

function RootLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  )
}

export default RootLayout
