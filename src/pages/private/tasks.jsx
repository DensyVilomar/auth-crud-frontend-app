import TasksForm from '../../components/tasks/tasksForm'
import TasksList from '../../components/tasks/tasksList'

import '../../stylesheets/pages/private/tasks.css'

function Tasks() {
  return (
    <div id="tasks__main-container">
      <h1>Tasks</h1>
      <div className="tasksForm__container">
        <TasksForm />
      </div>
      <div className="tasksList__container">
        <TasksList />
      </div>
    </div>
  )
}

export default Tasks
