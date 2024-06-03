import ButtonContainer from './Components/ButtonContainer/ButtonContainer.jsx';
import Screen from './Components/Screen/Screen.jsx'
import styles from "./App.module.css";
import { useState } from 'react';


function App() {
  const [answer, setAnswer] = useState("");

  const onButtonClick = (buttonClicked) => {
    try{
      if(buttonClicked === 'c') setAnswer("");
      else if(buttonClicked === '=') setAnswer(eval(answer));
      else setAnswer(answer + buttonClicked);
    } catch(e){
      setAnswer("invalid input");
    }
    
  }

  return (
    <div className={styles.calculator}>
      <Screen answer = {answer} />
      <ButtonContainer handleClick = {onButtonClick} />
    </div>
  );
}

export default App;
