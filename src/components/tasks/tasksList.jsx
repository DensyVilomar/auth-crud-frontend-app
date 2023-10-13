import { useUserInfo } from '../../app/hooks'
import { useGetAllTasksQuery } from '../../features/tasks/tasksApiSlice'

function TasksList() {
  const user = useUserInfo()

  const { data: tasks, isLoading, isError } = useGetAllTasksQuery()

  if (isLoading) {
    return <h2>Loading...</h2>
  } else if (isError) {
    return <h2>An error has ocurred</h2>
  } else {
    const userTasks = tasks.filter((task) => task.creator === user.id)

    if (userTasks.length === 0) {
      return <h2>No tasks yet</h2>
    } else {
      return (
        <div>
          {userTasks.map((task) => (
            <ul key={task.id}>
              <li>
                <h2>Title: {task.title}</h2>
                <span>Deadline: {task.deadline}</span>
                <input type="checkbox" />
              </li>
            </ul>
          ))}
        </div>
      )
    }
  }
}

export default TasksList
