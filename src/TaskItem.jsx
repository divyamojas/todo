import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TaskItem.css";

function TaskItem({ item, handleDelete }) {
  let today = new Date();
  function timeLeft(secs) {
    let days, hr, min, s;
    days = parseInt(secs / 86400);
    hr = parseInt((secs % 86400) / 3600);
    min = parseInt((secs % 3600) / 60);
    s = secs % 60;
    return days
      ? `${days}:${hr}:${min}:${s}`
      : hr
      ? `0:${hr}:${min}:${s}`
      : min
      ? `0:0:${min}:${s}`
      : s
      ? `0:0:0:${s}`
      : false;
  }

  return (
    <Card sx={{ maxWidth: 345 }} className="taskItem">
      <CardHeader
        title={item.title}
        subheader={
          item.remSecs > 0 ? `${timeLeft(item.remSecs)}` : "DEADLINE MISSED!"
        }
        action={
          <IconButton
            aria-label="settings"
            sx={{ ml: 4 }}
            onClick={() => handleDelete(item)}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent className="taskDescription">
        <Typography
          variant="body1"
          color="gray"
          sx={{ fontSize: "0.8rem" }}
          component="i"
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TaskItem;
