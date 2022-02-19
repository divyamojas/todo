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
  return (
    <Card sx={{ maxWidth: 345 }} className="taskItem">
      <CardHeader
        title={item.title}
        subheader={`Deadline : ${item.time}`}
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
