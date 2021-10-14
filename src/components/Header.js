import PropTypes from 'prop-types'
import  Button from './Button.js'

function Header({title}) {


    function addButtonEvent(){
        console.log('works')
    }


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button buttonFunction ={addButtonEvent} />
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
