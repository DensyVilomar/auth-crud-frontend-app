import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/navbar'

function RootLayout() {
  return (
    <div className="root__layout-container">
      <Navbar />

      <Outlet />
    </div>
  )
}

export default RootLayout
