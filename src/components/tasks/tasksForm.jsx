import { useState } from 'react'
import { useUserInfo } from '../../app/hooks'
import { useCreateTaskMutation } from '../../features/tasks/tasksApiSlice'

function TasksForm() {
  const user = useUserInfo()

  const [task, setTask] = useState({
    title: '',
    deadline: '',
    creator: user.id
  })

  const [createTask, { isLoading }] = useCreateTaskMutation()

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await createTask(task)
    } catch (error) {
      console.error('Error')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={task.title}
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="deadline"
            value={task.deadline}
            placeholder="Deadline"
            onChange={handleChange}
          />
        </div>

        <button disabled={isLoading} type="submit">
          Create Task
        </button>
      </form>
    </div>
  )
}

export default TasksForm
