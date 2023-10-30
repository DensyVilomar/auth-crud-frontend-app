import {
  useGetAllTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} from '../../features/tasks/tasksApiSlice'

import '../../stylesheets/components/tasks/tasksList.css'

function TasksList() {
  const { data, isLoading, isError } = useGetAllTasksQuery()

  const [updateTask] = useUpdateTaskMutation()

  const [deleteTask] = useDeleteTaskMutation()

  if (isError) {
    return (
      <div className="general__container">
        <h2>An error has ocurred</h2>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="general__container">
        <h2>Loading...</h2>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="general__container">
        <h2>No tasks yet</h2>
      </div>
    )
  }

  return (
    <div className="tasksList__main-container">
      <h2 className="tasksList__header">Your tasks</h2>
      {data.map((task) => (
        <div className="task__container" key={task.id}>
          <h4 className="task__title">{task.title}</h4>
          <strong className="task__deadline">
            Deadline: <span>{task.deadline}</span>
          </strong>
          <div className="completed__container">
            <label
              className={
                task.completed
                  ? 'done completed__container-label'
                  : 'completed__container-label'
              }
              htmlFor={task.id}
            >
              Done
            </label>
            <input
              type="checkbox"
              id={task.id}
              checked={task.completed}
              onChange={(e) => {
                updateTask({ ...task, completed: e.target.checked })
              }}
            />
          </div>
          <div className="buttons__container">
            <button
              className="task__update-button button"
              onClick={() => {
                console.log('update')
              }}
            >
              <i className="bx bx-edit"></i>
            </button>
            <button
              className="task__delete-button button"
              onClick={() => deleteTask(task.id)}
            >
              <i className="bx bx-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TasksList
