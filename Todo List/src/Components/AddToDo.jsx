import {IoIosAdd} from "react-icons/io"
import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/Todo-Items-Store";

function AddToDo() {
    let toDoNameElement = useRef('');
    let dueDateElement = useRef('');
    const onAddClick = useContext(TodoItemsContext).handleAddNewItem;

    // const handleNameChange = (event) => {
    //     let val = event.target.value;
    //     if(val) setName(val);
    // }

    // const handleDateChange = (event) => {
    //     let val = event.target.value;
    //     if(val) setDate(val);
    // }

    const handleNewItem = (event) =>{
        event.preventDefault();
        const name = toDoNameElement.current.value;
        const date = dueDateElement.current.value;
        // console.dir(toDoNameElement.current);
        // console.dir(dueDateElement.current);
        toDoNameElement.current.value = '';
        dueDateElement.current.value = '';
        if(name && date) onAddClick(name, date);
        else alert("invalid input");
    }

    return(
    <form className="row my-row" onSubmit={(event) => handleNewItem(event)}>
        <div className="col-6">
        <input type="text" placeholder=" Enter your task" ref = {toDoNameElement} />
        </div>

        <div className="col-4">
        <input type="date" ref = {dueDateElement} />
        </div>

        <div className="col-2">
        <button type="submit" className="btn btn-success my-button">
            Add task <IoIosAdd />
        </button>
        </div>
    </form>
  );
}

export default AddToDo;
