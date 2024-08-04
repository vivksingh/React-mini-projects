import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { TodoItemsContext } from "../store/Todo-Items-Store";


function ToDoItems(){
    const toDoItems = useContext(TodoItemsContext).items;
    return(
        toDoItems.map((item, index) => {
            return (<ToDoItem key = {index} name = {item.toDoName} date = {item.toDoDate} />)
        })
    );
}

export default ToDoItems