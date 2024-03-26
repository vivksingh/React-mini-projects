import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({sign}){
    return(
        <button className = {styles.button}>{sign}</button>
    );
}

Button.propTypes = {
    sign: PropTypes.string
};

export default Button;