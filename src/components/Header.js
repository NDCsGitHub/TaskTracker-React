import PropTypes from 'prop-types'
import  Button from './Button.js'
import  {useLocation } from 'react-router-dom'

function Header({title, onAdd, showAddTask}) {

    const location =  useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/'  &&
                <Button 
                onClick ={onAdd} 
                text={showAddTask===true? "Close":"Add"} 
                color = {showAddTask===true? "red":"steelblue" }
                />
            }       
        </header>
    )
}

Header.defaultProps = { 
    title:'Task Manager',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
