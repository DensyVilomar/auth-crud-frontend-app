import { useParams, useNavigate } from 'react-router-dom'
import { useActivationMutation } from '../../features/auth/authApiSlice'

function ActivateBtn() {
  const params = useParams()

  const navigate = useNavigate()

  const parameters = {
    uid: params.uid,
    token: params.token
  }

  const [activate, { isLoading, isError }] = useActivationMutation()

  const handleActivate = async (e) => {
    e.preventDefault()

    try {
      await activate(parameters)
      if (isError) {
        console.error('Activation failed')
      } else {
        navigate('/login')
      }
    } catch (error) {
      // TODO: Add an alert
      alert('Account activation failed')
    }
  }

  return (
    <div>
      <button disabled={isLoading} onClick={handleActivate}>
        Activate your account
      </button>
    </div>
  )
}

export default ActivateBtn
