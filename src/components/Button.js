import React from 'react'

function Button({color,text}) {
    return (
      <button  style= {{backgroundColor:color}} className='btn'> {text} </button>
    )
}

export default Button
