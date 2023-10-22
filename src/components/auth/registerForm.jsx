import { Link } from 'react-router-dom'
import { useForm } from '../../../hooks/form'
import { useRegisterMutation } from '../../features/auth/authApiSlice'

function RegisterForm() {
  const registerData = {
    email: '',
    username: '',
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
    <div>
      <h1>Register</h1>
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
            type="text"
            name="username"
            value={form.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="date_of_birth"
            value={form.date_of_birth}
            placeholder="Date of birth"
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
        <div>
          <input
            type="password"
            name="re_password"
            value={form.re_password}
            placeholder="Repeat Password"
            onChange={handleChange}
          />
        </div>

        <Link to="/login">Already have an account?</Link>

        <button disabled={isLoading} type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
