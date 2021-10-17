import { FaTimes} from 'react-icons/fa'

function Task({taskProp, onDeleteTask, onToggleReminder}) {


    function  toggleUI(){
        if(taskProp.reminder === true){
            return 'reminder'
        }else{
            return ''
        }
    }

    // we can also use ternary statement to add the toggleUI function   `task ${taskProp.reminder ? 'reminder':''}`

    return (
        <div 
        className={`task ${toggleUI()}`}
        onClick={() => onToggleReminder(taskProp.id)}>
         
         <h3>
             {taskProp.text} 
             <FaTimes 
             className="deleteButton" 
             style={{color:  'red', cursor: 'pointer'}} 
             onClick={ () =>  onDeleteTask(taskProp.id)} />
        </h3>

         <p>{taskProp.day}</p>

         <p>ID: {taskProp.id}</p>


        </div>
    )
}

export default Task
