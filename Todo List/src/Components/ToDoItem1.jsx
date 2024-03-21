function ToDoItem1() {
    let toDoName = "Buy Milk";
    let toDoDate = "4/10/2023";

  return (
    <div className="row my-row">
      <div className="col-6">{toDoName}</div>
      <div className="col-4">{toDoDate}</div>
      <div className="col-2">
        <button className="btn btn-danger my-button"> remove </button>
      </div>
    </div>
  );
}

export default ToDoItem1;
