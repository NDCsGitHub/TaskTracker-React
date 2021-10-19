import Header from './components/Header.js'
import Tasks  from  './components/Tasks.js'
import AddTask  from './components/AddTask'
import Footer from './components/Footer.js'
import About from './components/About.js'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {

  const [taskArray, setTasks] = useState([

  ])


  // push data into our arrayTask state
  useEffect(() => {
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  // fetch data tasks
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // fetch a single task
  async function fetchTask(id){
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


const [showAddTask, setShowAddTask] = useState(false)

// delete task
async function deleteTask(id){
  await fetch(`http://localhost:5000/tasks/${id}`, {method:'DELETE'})
  setTasks(   
    taskArray.filter(item  => item.id !== id) 
  ) 
}

// adding new task
async function addTask(task){
  const res = await fetch('http://localhost:5000/tasks', {
    method:"POST",
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task)

  })
  
  // const id = Math.floor(Math.random()*10000) + 1
  // const newTask = {id, ...task}

  const data = await res.json()
  setTasks([...taskArray, data])
  
}




// double click for reminder
async function toggleReminder(id){
  const taskToToggle = await fetchTask(id)
  const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method:'PUT',
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify(updatedTask)
  })

  const data = await res.json()

  setTasks(
    taskArray.map((item) => 
      item.id === id ? {...item, reminder: data.reminder} : item
    )
  )
}



//add button function
function onAdd(){
  setShowAddTask(!showAddTask)
}



  return (
    <Router>
    <div className="container">

      <Header onAdd={onAdd} showAddTask={showAddTask} />




      <Route path ='/' exact render = {(props) => (
        <>
        {showAddTask===true ?
          (<AddTask onAdd={addTask} />)
          :
          null
        }


        {taskArray.length > 0  ?  
        (<Tasks taskArrayProp={taskArray} onDeleteTask={deleteTask} onToggleReminder={toggleReminder} />) 
        : 
        ("Not Task")}
        
        </>
      )}/>

      <Route path='/about' component = {About} />
      <Footer />

    </div>
    </Router>
  );
}

export default App;
