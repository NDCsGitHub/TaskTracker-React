import Header from './components/Header.js'
import Tasks  from  './components/Tasks.js'
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

  return (
    <div className="container">
     <Header />
     {taskArray.length > 0  ?  
     (<Tasks taskArrayProp={taskArray} onDeleteTask={deleteTask} onToggleReminder={toggleReminder} />) 
     : 
     ("Not Task")}

    </div>
  );
}

export default App;
