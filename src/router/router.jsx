import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'

import Index from '../pages/public'
import Login from '../pages/public/login'
import Register from '../pages/public/register'
import Activate from '../pages/public/activate'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/activate',
        element: <Activate />
      }
    ]
  }
])
