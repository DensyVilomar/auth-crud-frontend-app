import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Oval } from 'react-loader-spinner'
import { useForm } from '../../../hooks/form'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import { setToken, setRefresh } from '../../features/auth/authSlice'

import '../../stylesheets/auth/loginForm.css'

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
      console.error('error')
    }
  }

  return (
    <div className="loginForm__container">
      <h1 className="loginForm__header">Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="input__box">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="off"
            value={form.email}
            placeholder="johndoe@gmail.com"
            onChange={handleChange}
          />
          <i className="bx bx-envelope"></i>
        </div>

        <div className="input__box">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <i className="bx bx-lock-alt"></i>
        </div>

        <div className="loginForm__redirect">
          <Link className="loginForm__link">Forgot your password?</Link>

          <Link to="/register" className="loginForm__link">
            Sign up
          </Link>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="loginForm__button"
        >
          {isLoading ? (
            <Oval
              height="32"
              width="32"
              radius="15"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          ) : (
            'Sign in'
          )}
        </button>
      </form>
    </div>
  )
}

export default LoginForm
