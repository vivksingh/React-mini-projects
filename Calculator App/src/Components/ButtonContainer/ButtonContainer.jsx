import Button from "../Buttons/Buttons";
import styles from "./ButtonContainer.module.css";

function ButtonContainer() {
  const buttons = ['c', '1', '2', '+', '3','4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button) => {
        return <Button sign={button} key="btn" />})}

    </div>
  );
}


export default ButtonContainer;
