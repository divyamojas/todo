import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./TaskItem.css";

function TaskItem({ item, handleDelete }) {
  const today = new Date();
  function timeLeft(item) {
    let days, hr, min, s, secs;
    secs = item.time["seconds"] - parseInt(today.getTime() / 1000);
    if (secs <= 0) return 0;
    days = parseInt(secs / 86400);
    hr = parseInt((secs % 86400) / 3600);
    min = parseInt((secs % 3600) / 60);
    s = secs % 60;
    return `${days}:${hr}:${min}:${s}`;
  }
  return (
    <Card sx={{ maxWidth: 345 }} className="taskItem">
      <CardHeader
        title={item.title}
        subheader={
          <div className="timeBar">
            <AccessTimeIcon
              sx={{
                mr: 1,
                color: timeLeft(item) ? "inherit" : "red",
              }}
              fontSize="small"
            />
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: timeLeft(item) ? "inherit" : "red",
              }}
            >
              {timeLeft(item) ? `${timeLeft(item)}` : "You are Late buddy :-("}
            </Typography>
          </div>
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
