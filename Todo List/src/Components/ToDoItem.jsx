import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/Todo-Items-Store";

function ToDoItem({name, date }) {
  const onRemoveButton = useContext(TodoItemsContext).handleRemoveButton;

  return (
    <div className="row my-row">
      <div className="col-6">{name}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button className="btn btn-danger my-button" onClick={() => onRemoveButton(name)}> remove <MdDelete /> </button>
      </div>
    </div>
  );
}

export default ToDoItem;
