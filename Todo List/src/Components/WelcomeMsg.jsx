import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-Items-Store";


const WelcomeMsg = () => {
    const toDoItems = useContext(TodoItemsContext).items;
    return(
        toDoItems.length === 0 && <p>No current tasks to do!</p>
    );
}

export default WelcomeMsg;