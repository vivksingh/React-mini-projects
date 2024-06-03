import Styles from './Screen.module.css'

function Screen({answer}){
    return(
        <>
            <input type="text" className={Styles.display} placeholder={answer} readOnly/>
        </>
    );
}

export default Screen;