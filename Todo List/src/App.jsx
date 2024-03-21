import AppName from './Components/AppName.jsx'
import AddToDo from './Components/AddToDo.jsx';
import ToDoItem1 from './Components/ToDoItem1.jsx';
import ToDoItem2 from './Components/ToDoItem2.jsx'
import "./App.css";

function App() {
  return (
    <div className="container">
      <AppName />
      <AddToDo />
      <ToDoItem1 />
      <ToDoItem2 />
    </div>
  );
}

export default App;
