import { useState } from "react";

function AddToDo({onAddClick}) {
    let [name, setName] = useState('');
    let [date, setDate] = useState('');

    // const handleNameChange = (event) => {
    //     let val = event.target.value;
    //     if(val) setName(val);
    // }

    // const handleDateChange = (event) => {
    //     let val = event.target.value;
    //     if(val) setDate(val);
    // }

    const handleNewItem = (name, date) =>{
        if(name && date) onAddClick(name, date);
        else alert("invalid input");
        setName('');
        setDate('');
    }

    return(
    <div className="row my-row">
        <div className="col-6">
        <input type="text" placeholder=" Enter your task" value = {name} onChange={(event) => setName(event.target.value)} />
        </div>

        <div className="col-4">
        <input type="date" value = {date} onChange={(event) => setDate(event.target.value)} />
        </div>

        <div className="col-2">
        <button type="button" className="btn btn-success my-button" onClick = {() => handleNewItem(name, date)}>
            Add task
        </button>
        </div>
    </div>
  );
}

export default AddToDo;
