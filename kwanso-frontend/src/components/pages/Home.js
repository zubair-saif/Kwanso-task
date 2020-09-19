import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [task, setTask] = useState([]);
  const [ids, setIds] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  const [ar, setArray] = useState([]);

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    const result = await axios.get("http://localhost:4000/api/list-task");
    setTask(result.data.tasks);

  };

  const deleteMultiple = async id => {
    setCheckbox(true);
    ar.push(id);
    setIds(ar);

  };

  const deleteAll = async () => {
    setCheckbox(false);
    await axios.post(`http://localhost:4000/api/deleteTask`, { ids });
    loadTask();
  };
  return (
    <div className="container">
      <div className="py-4">

        <h1>Task List</h1>
        {
          checkbox ? <Link
            class="btn btn-danger mb-3"
            onClick={deleteAll}
          >
            Delete
                  </Link>
            : null
        }
        <div className="row">

          {task.map((task, index) => (
            <div className="col-4 mb-2">
              <div class="card shadow">
                <input type="checkbox" className="m-2" value={checkbox} onChange={() => deleteMultiple(task._id)} />
                <div class="card-body">
                  {task.name}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
