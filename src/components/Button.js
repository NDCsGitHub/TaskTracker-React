import PropTypes from 'prop-types'

function Button({color,text, buttonFunction}) {


    return (
        <button  
            onClick ={buttonFunction} 
            style={{backgroundColor:color}} 
            className='btn'> {text} 
        </button>
    )
}


Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    buttonFunction:  PropTypes.func,
}


export default Button
