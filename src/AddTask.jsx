import { DateTimePicker, LoadingButton, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import AddIcon from "@mui/icons-material/Add";
import { Card, CardContent, CardHeader, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./AddTask.css";

function AddTask({ tasks, setTasks }) {
  const [taskTime, setTaskTime] = useState(new Date());
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      setTaskTime(new Date());
      setTaskTitle("");
      setTaskDescription("");
    }
  }, [loading]);

  const handleClick = () => {
    let today = new Date();
    // setLoading(true);
    try {
      taskTitle
        ? taskTime.getTime() - today.getTime() > 0
          ? setTasks([
              {
                title: taskTitle,
                description: taskDescription,
                time: taskTime,
                remSecs: parseInt(
                  (taskTime.getTime() - today.getTime()) / 1000
                ),
              },
              ...tasks,
            ])
          : alert("Please enter a time of the future!")
        : alert("Please enter a title for the task!");
    } catch (err) {
      console.log(err);
    } finally {
      // console.log("no work :-P");
    }
  };
  const handleTitle = (newVal) => {
    setTaskTitle(newVal);
  };
  const handleDescription = (newVal) => {
    setTaskDescription(newVal);
  };
  const handleTime = (newVal) => {
    setTaskTime(newVal);
  };
  return (
    <div className="addTask">
      <Card className="cardBody">
        <CardHeader title="Add Task" align="center" />
        <CardContent className="data">
          <Stack spacing={3}>
            <TextField
              required
              label="Task Name"
              placeholder="What do you have?"
              onChange={(e) => handleTitle(e.target.value)}
              value={taskTitle}
            />
            <TextField
              multiline
              rows={3}
              label="Task Description (Optional)"
              placeholder="Describe the task if you want.."
              onChange={(e) => handleDescription(e.target.value)}
              value={taskDescription}
            />
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DateTimePicker
                ampm={false}
                label="Deadline"
                onChange={(e) => handleTime(e._d)}
                value={taskTime}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              loadingPosition="center"
              variant="contained"
            >
              <AddIcon />
            </LoadingButton>{" "}
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddTask;
