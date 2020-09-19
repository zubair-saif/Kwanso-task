import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddTask = () => {
  let history = useHistory();
  const [task, setTask] = useState({
    name: "",
  });

  const { name } = task;
  const onInputChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/create-task", task);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5 mt-4">
        <h2 className="text-center mb-4">Add Task</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter task name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
