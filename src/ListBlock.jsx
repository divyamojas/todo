import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./ListBlock.css";

const TASKS = [
  {
    title: "Todo list project",
    description: " Complete hosted website for todo",
  },
  { title: "title of task", description: "description of task" },
  { title: "title of task", description: "description of task" },
  { title: "title of task", description: "description of task" },
  { title: "title of task", description: "description of task" },
  { title: "title of task", description: "description of task" },
];

function ListBlock() {
  return (
    <div className="root">
      <h2 className="listHeading">Pending Tasks!</h2>
      <hr />
      {TASKS.map((el, key) => (
        <Card className="list-item">
          <CardContent>
            <Typography className="list-title" variant="h5">
              {el.title}
            </Typography>
            <hr width="40%" />
            <Typography variant="body2" className="list-desrciption">
              {el.description}{" "}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ListBlock;
