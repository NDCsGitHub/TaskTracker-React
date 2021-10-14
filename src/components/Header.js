import PropTypes from 'prop-types'
import  Button from './Button.js'

function Header({title}) {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='darkgreen' text='Add' />
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
