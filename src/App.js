import Header from './components/Header.js'
import Tasks  from  './components/Tasks.js'
import AddTask  from './components/AddTask'
import {useState} from 'react'

function App() {

  const [taskArray, setTasks] = useState(
    [
        {
            id:1,
            text:"text 1",
            day: 'Oct 1st at 3pm',
            reminder:true,
        },
        {
            id:2,
            text: "text 2",
            day: "Oct 2nd at 2pm",
            reminder:true,
        },
        {
            id:3,
            text:"text 3",
            day:'Oct 3rd at 5pm',
            reminder: false, 
        },
    ]
)


const [showAddTask, setShowAddTask] = useState(false)

// delete task
function deleteTask(id){
  setTasks(
    taskArray.filter(item  => item.id !== id)
  )
}

// double click for reminder
function toggleReminder(id){
  setTasks(
    taskArray.map((item) => 
      item.id === id ? {...item, reminder: !item.reminder} : item
    )
  )
}


// adding new task
function addTask(task){
  // setTasks(taskArray.push(task))
  // console.log(taskArray)
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = {id, ...task}
  setTasks(taskArray.concat([newTask]))
  console.log(taskArray)
}

//add button function
function onAdd(){
  setShowAddTask(!showAddTask)
}



  return (
    <div className="container">

      <Header onAdd={onAdd} showAddTask={showAddTask} />
      
      {showAddTask===true ?
        (<AddTask onAdd={addTask} />)
        :
        null
      }

      {taskArray.length > 0  ?  
      (<Tasks taskArrayProp={taskArray} onDeleteTask={deleteTask} onToggleReminder={toggleReminder} />) 
      : 
      ("Not Task")}


    </div>
  );
}

export default App;
