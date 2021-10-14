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

  return (
    <div className="container">
     <Header />
     <Tasks taskArrayProp={taskArray} />
    </div>
  );
}

export default App;
