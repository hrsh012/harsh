import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Createtask = ({ toggle, modal, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium"); // Default priority is medium
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "priority") {
      setPriority(value);
    }
  };

  const Save = () => {
    let taskObj = {
      name: taskName,
      Description: description,
      Priority: priority,
    };

    const updatedTasks = [...tasks, taskObj];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTasks(updatedTasks);

    save(taskObj);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Practice</ModalHeader>
        <ModalBody>
          <form>
            <label>Task Name</label>
            <div className="form-groups">
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={handleChange}
                name="taskName"
              />
            </div>
            <label>Description</label>
            <div className="form-groups">
              <textarea
                rows="5"
                className="form-control"
                value={description}
                placeholder="Description"
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
            <label>Priority</label>
            <div className="form-groups">
              <select
                className="form-control"
                value={priority}
                onChange={handleChange}
                name="priority"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Save}>
            Save
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <div>
        <table className="task-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.name}</td>
                <td>{task.Description}</td>
                <td>{task.Priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Createtask;
