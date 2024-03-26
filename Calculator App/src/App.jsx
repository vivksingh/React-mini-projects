import ButtonContainer from './Components/ButtonContainer/ButtonContainer.jsx';
import Screen from './Components/Screen/Screen.jsx'
import styles from "./App.module.css";



function App() {
  return (
    <div className={styles.calculator}>
      <Screen />
      <ButtonContainer />
    </div>
  );
}

export default App;
