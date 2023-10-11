import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import { setToken, setRefresh } from '../../features/auth/authSlice'

function LoginForm() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const [login, { isLoading }] = useLoginMutation()

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await login(credentials)

      localStorage.setItem('accessToken', JSON.stringify(data.access))
      localStorage.setItem('refreshToken', JSON.stringify(data.refresh))

      dispatch(setToken(data.access))
      dispatch(setRefresh(data.refresh))
    } catch (error) {
      console.error('Login failed')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={credentials.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <Link to="/register">Do not have an account?</Link>

        <button disabled={isLoading} type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
