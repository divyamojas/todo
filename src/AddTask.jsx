import { DateTimePicker, LoadingButton, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import AddIcon from "@mui/icons-material/Add";
import { Card, CardContent, CardHeader, Stack, TextField } from "@mui/material";
import { useState } from "react";
import "./AddTask.css";

function AddTask() {
  const [value, setValue] = useState(new Date());
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }
  const handleChange = (newValue) => {
    setValue(newValue);
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
            />
            <TextField
              multiline
              rows={3}
              label="Task Description (Optional)"
              placeholder="Describe the task if you want.."
            />
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DateTimePicker
                ampm={false}
                label="Deadline"
                value={value}
                onChange={handleChange}
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
