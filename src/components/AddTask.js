import React from 'react'
import {useState}   from 'react'

function AddTask() {

    const [test, setText]=useState('')
    const [day, setDay]=useState('')
    const [reminder, setReminder]=useState(false)
 


    return (
        <div>
            <form className='add-form'>

                <div className='form-control'>
                    <label>Task</label>
                    <input type="text" placeholde='Add Task'/>
                </div>

                <div className='form-control'>
                    <label>Day & Time</label>
                    <input type="text" placeholde='Add Day & Time'/>
                </div>    

                <div className='form-control form-control-check'>
                    <label>Set Reminder</label>
                    <input type="checkbox"/>
                </div>    

                <input className='btn btn-block' type="submit" value='Save Task'/>

            </form>
            
        </div>
    )
}

export default AddTask
