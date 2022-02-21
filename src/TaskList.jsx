import "./TaskList.css";
import TaskItem from "./TaskItem";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./Firebase";
import { Typography } from "@mui/material";

function TaskList({ tasks, setTasks }) {
  const [timer, setTimer] = useState(false);
  setTimeout(() => setTimer(!timer), 1000); // refreshes states every 1 second
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
        {tasks.length ? (
          tasks.map((el, key) => (
            <TaskItem item={el} key={key} handleDelete={handleDelete} />
          ))
        ) : (
          <Typography
            variant="h4"
            sx={{ color: "#bbb", fontFamily: "Lobster", textAlign: "center" }}
          >
            Woooohooooo! <br />
            You have finished all work!
          </Typography>
        )}
      </div>
    </div>
  );
}

export default TaskList;
