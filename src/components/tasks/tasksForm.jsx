import { useForm } from '../../../hooks/form'
import { useUserInfo } from '../../app/hooks'
import { useCreateTaskMutation } from '../../features/tasks/tasksApiSlice'

import '../../stylesheets/components/tasks/tasksForm.css'

function TasksForm() {
  const user = useUserInfo()

  const taskData = {
    title: '',
    deadline: '',
    creator: user.id
  }

  const { form, handleChange } = useForm(taskData)

  const [createTask, { isLoading }] = useCreateTaskMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await createTask(form)
    } catch (error) {
      console.error('Error')
    }
  }

  return (
    <div className="taskForm__container">
      <h2 className="taskForm__header">Create your tasks</h2>
      <form className="taskForm__box" onSubmit={handleSubmit}>
        <div className="taskForm__input-box">
          <label htmlFor="">Title</label>
          <input
            required
            type="text"
            name="title"
            maxLength={50}
            value={form.title}
            placeholder="Do the dishes"
            onChange={handleChange}
          />
        </div>
        <div className="taskForm__input-box">
          <label htmlFor="">Deadline</label>
          <input
            required
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />
        </div>

        <button className="taskForm__button" disabled={isLoading} type="submit">
          Create Task
        </button>
      </form>
    </div>
  )
}

export default TasksForm
