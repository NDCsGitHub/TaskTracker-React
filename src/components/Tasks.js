


function Tasks({taskArrayProp}) {

    return (
        <div>
           
           {taskArrayProp.map(task => 
               <h3  key={task.id}>{task.text}</h3>
           )}
            
        </div>
    )
}

export default Tasks
