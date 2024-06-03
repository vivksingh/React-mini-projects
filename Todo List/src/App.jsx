import AppName from './Components/AppName.jsx'
import AddToDo from './Components/AddToDo.jsx';
import ToDoItem from './Components/ToDoItem.jsx';
import WelcomeMsg from './Components/WelcomeMsg.jsx';
import {useState} from 'react';
import "./App.css";

function App() {
  const [items, setItems] = useState([
  {
    toDoName : "Buy Milk",
    toDoDate : "2024-11-01"
  },{
    toDoName : "birthday",
    toDoDate : "2024-07-1"
  }])

  const handleAddNewItem = (name, date) => {
    let newItem = {
      toDoName : name,
      toDoDate : date
    }
    setItems([...items, newItem]);
  }

  const handleRemoveButton = (toDoItemName) => {
    const newToDoList = items.filter((item) => (item.toDoName !== toDoItemName));
    setItems(newToDoList);
  }

  return (
    <div className="container">
      <AppName />
      <AddToDo onAddClick = {handleAddNewItem} />
      {items.length === 0 && <WelcomeMsg />}
      {items.map((item, index) => (
        <ToDoItem key = {index} name = {item.toDoName} date = {item.toDoDate} onRemoveButton = {handleRemoveButton} />
      ))}
    </div>
  );
}

export default App;
