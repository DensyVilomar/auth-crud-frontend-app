import { useState } from 'react'
import { useRegisterMutation } from '../../features/auth/authApiSlice'

function RegisterForm() {
  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    password: '',
    re_password: ''
  })

  const [register, { isLoading }] = useRegisterMutation()

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await register(registerData)
    } catch (error) {
      console.error('Registration failed')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={registerData.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            value={registerData.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="first_name"
            value={registerData.first_name}
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            value={registerData.last_name}
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="date_of_birth"
            value={registerData.date_of_birth}
            placeholder="Date of birth"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={registerData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="re_password"
            value={registerData.re_password}
            placeholder="Repeat Password"
            onChange={handleChange}
          />
        </div>

        <button disabled={isLoading} type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
