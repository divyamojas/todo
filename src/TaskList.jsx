import React from "react";
import "./TaskList.css";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  const handleDelete = (el) => {
    let clone = tasks.slice();
    clone.splice(tasks.indexOf(el), 1);
    setTasks(clone);
  };
  return (
    <div className="taskList">
      <div className="taskBlock">
        {tasks.map((el, key) => (
          <TaskItem item={el} key={key} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
