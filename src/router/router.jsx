import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import AuthLayout from '../layouts/AuthLayout'
import PrivateLayout from '../layouts/PrivateLayout'

import Index from '../pages/public'
import Login from '../pages/public/login'
import Register from '../pages/public/register'
import Activate from '../pages/public/activate'

import Home from '../pages/private/home'
import Tasks from '../pages/private/tasks'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <AuthLayout />,
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
            path: '/activate/:uid/:token',
            element: <Activate />
          }
        ]
      },
      {
        path: '/',
        element: <PrivateLayout />,
        children: [
          {
            path: '/home',
            element: <Home />
          },
          {
            path: '/tasks',
            element: <Tasks />
          }
        ]
      }
    ]
  }
])
