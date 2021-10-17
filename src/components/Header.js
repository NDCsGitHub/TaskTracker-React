import PropTypes from 'prop-types'
import  Button from './Button.js'

function Header({title, onAdd, showAddTask}) {


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                onClick ={onAdd} 
                text={showAddTask===true? "Close":"Add"} 
                color = {showAddTask===true? "red":"steelblue" }
            />
            
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
