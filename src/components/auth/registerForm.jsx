import { Link } from 'react-router-dom'
import { useForm } from '../../../hooks/form'
import { useRegisterMutation } from '../../features/auth/authApiSlice'

import '../../stylesheets/auth/registerForm.css'

function RegisterForm() {
  const registerData = {
    email: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    password: '',
    re_password: ''
  }

  const { form, handleChange } = useForm(registerData)

  const [register, { isLoading }] = useRegisterMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await register(form)
    } catch (error) {
      console.error('Registration failed')
    }
  }

  return (
    <div className="registerForm__container">
      <form onSubmit={handleSubmit} className="form__box">
        <h1>Sign up</h1>
        <div className="inputs__container">
          <div className="register__input-box">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="register__input-box">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="Your first name"
            />
          </div>
          <div className="register__input-box">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Your last name"
            />
          </div>
          <div className="register__input-box">
            <label htmlFor="date_of_birth">Date of birth</label>
            <input
              id="date_of_birth"
              type="date"
              name="date_of_birth"
              value={form.date_of_birth}
              onChange={handleChange}
              placeholder="2000-01-29"
            />
          </div>
          <div className="register__input-box">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Your password"
            />
          </div>
          <div className="register__input-box">
            <label htmlFor="re_password">Confirm Password</label>
            <input
              id="re_password"
              type="password"
              name="re_password"
              value={form.re_password}
              onChange={handleChange}
              placeholder="Repeat your password"
            />
          </div>
        </div>

        <div>
          <button disabled={isLoading} type="submit">
            Sign up
          </button>
          <p>
            Already have an account?{' '}
            <Link className="singin__link" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
