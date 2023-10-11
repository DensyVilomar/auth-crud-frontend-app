import { useParams } from 'react-router-dom'
import { useActivationMutation } from '../../features/auth/authApiSlice'

function ActivateBtn() {
  const params = useParams()

  const [activate, { isLoading }] = useActivationMutation()

  const parameters = {
    uid: params.uid,
    token: params.token
  }

  const handleActivate = async (e) => {
    e.preventDefault()

    try {
      await activate(parameters)
    } catch (error) {
      console.error('Activation failed')
    }
  }

  return (
    <div>
      <button disabled={isLoading} onClick={handleActivate}>
        Activate
      </button>
    </div>
  )
}

export default ActivateBtn
