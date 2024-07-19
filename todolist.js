import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  //  console.log(task);

  function handleInputValue(event) {
    setTask(event.target.value);
  }

  function handleAddTask(event) {
    if(task.trim() === '') return;
    event.preventDefault();
    addTask(task);
    setTask("");
  }
  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        placeholder="Add Item"
        onChange={handleInputValue}
      />
      <button>+</button>
    </form>
  );
};

export default TaskInput;
