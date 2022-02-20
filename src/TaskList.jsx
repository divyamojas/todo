import React from "react";
import "./TaskList.css";
import TaskItem from "./TaskItem";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./Firebase";

function TaskList({ tasks, setTasks }) {
  const [timer, setTimer] = useState(false);
  setTimeout(() => setTimer(!timer), 1000);

  const handleDelete = (el) => {
    let clone = tasks.slice();
    clone.splice(tasks.indexOf(el), 1);
    setTasks(clone);
    (async function () {
      await deleteDoc(doc(db, "creator", el.title));
    })();
  };

  return (
    <div className="taskList">
      <div className="taskBlock">
        {tasks.map((el, key) => (
          <TaskItem
            item={el}
            key={key}
            handleDelete={handleDelete}
            timer={timer}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
