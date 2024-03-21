function AddToDo() {

    return(
    <div className="row my-row">
        <div className="col-6">
        <input type="text" placeholder=" Enter your task" />
        </div>

        <div className="col-4">
        <input type="date" />
        </div>

        <div className="col-2">
        <button type="button" className="btn btn-success my-button">
            Add task
        </button>
        </div>
    </div>
  );
}

export default AddToDo;
