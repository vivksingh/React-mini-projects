
function ToDoItem({name, date, onRemoveButton}) {

  return (
    <div className="row my-row">
      <div className="col-6">{name}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button className="btn btn-danger my-button" onClick={() => onRemoveButton(name)}> remove </button>
      </div>
    </div>
  );
}

export default ToDoItem;
