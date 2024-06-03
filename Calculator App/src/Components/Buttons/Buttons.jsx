import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({sign, onClick,}){
    return(
        <button className = {styles.button} onClick = {() => onClick(sign)} >{sign}</button>
    );
}

Button.propTypes = {
    sign: PropTypes.string
};

export default Button;