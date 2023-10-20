import {
  useGetAllTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} from '../../features/tasks/tasksApiSlice'

function TasksList() {
  const { data, isLoading, isError } = useGetAllTasksQuery()

  const [updateTask] = useUpdateTaskMutation()

  const [deleteTask] = useDeleteTaskMutation()

  if (isError) {
    return <h2>An error has occurred</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (data.length === 0) {
    return <h2>No tasks yet</h2>
  }

  return (
    <div>
      {data.map((task) => (
        <div key={task.id}>
          <h2>Title: {task.title}</h2>
          <strong>Deadline: {task.deadline}</strong> <br />
          <label htmlFor={task.id}>Completed</label>
          <input
            type="checkbox"
            id={task.id}
            checked={task.completed}
            onChange={(e) => {
              updateTask({ ...task, completed: e.target.checked })
            }}
          />
          <button
            onClick={() => {
              console.log('update')
            }}
          >
            Update
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TasksList
