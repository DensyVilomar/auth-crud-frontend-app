import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/navbar'

import '../stylesheets/layouts/rootLayout.css'

function RootLayout() {
  return (
    <div className="root__layout-container">
      <Navbar />

      <Outlet />

      <footer>Footer</footer>
    </div>
  )
}

export default RootLayout
