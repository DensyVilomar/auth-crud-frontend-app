import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../../hooks/form'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import { setToken, setRefresh } from '../../features/auth/authSlice'

function LoginForm() {
  const credentials = {
    email: '',
    password: ''
  }

  const { form, handleChange } = useForm(credentials)

  const [login, { isLoading }] = useLoginMutation()

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await login(form)

      localStorage.setItem('accessToken', data.access)
      localStorage.setItem('refreshToken', data.refresh)

      dispatch(setToken(data.access))
      dispatch(setRefresh(data.refresh))
    } catch (error) {
      console.error('Login failed')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <Link>Forgot your password?</Link>

        <Link to="/register">Sign Up</Link>

        <button disabled={isLoading} type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
