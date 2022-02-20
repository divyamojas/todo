import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./Body.css";
import { db } from "./Firebase";

function Body() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "creator"), (snapshot) => {
      setTasks(
        snapshot.docs
          .map((doc) => doc.data())
          .sort((a, b) => a.remSecs - b.remSecs)
      );
    });
  }, []);

  return (
    <Card className="body">
      <TaskList tasks={tasks} setTasks={setTasks} />
      <AddTask tasks={tasks} setTasks={setTasks} />
    </Card>
  );
}

export default Body;
