import AppName from './Components/AppName.jsx'
import AddToDo from './Components/AddToDo.jsx';
import WelcomeMsg from './Components/WelcomeMsg.jsx';
import TodoItemsContextProvider from './store/Todo-Items-Store.jsx'
import ToDoItems from './Components/ToDoItems.jsx';
import "./App.css";


function App() {
  return (
    <TodoItemsContextProvider>
    <div className="container">x
      <AppName />
      <AddToDo/>
      <WelcomeMsg/>
      <ToDoItems></ToDoItems>
    </div>
    </TodoItemsContextProvider>
  );
}

export default App;
