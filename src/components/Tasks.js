import Task from './Task.js'


function Tasks({taskArrayProp, onDeleteTask, onToggleReminder}) {

    return (
        <div>
           
           {taskArrayProp.map(item => 
               <Task  key={item.id}  taskProp={item} onDeleteTask={onDeleteTask} onToggleReminder={onToggleReminder} />
           )}
            
        </div>
    )
}

export default Tasks
