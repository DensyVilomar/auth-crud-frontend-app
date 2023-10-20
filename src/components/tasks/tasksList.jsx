import {
  useGetAllTasksQuery,
  useDeleteTaskMutation
} from '../../features/tasks/tasksApiSlice'

function TasksList() {
  const [deleteTask, { isLoading: deleting }] = useDeleteTaskMutation()

  const { data, isLoading, isError } = useGetAllTasksQuery()

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
          <strong>Deadline: {task.deadline}</strong>
          <button>Update</button>
          <button disabled={deleting} onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default TasksList
