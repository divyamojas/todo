import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function AddTask() {
  return (
    <Card>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Container
          style={{ textAlign: "center", fontSize: "32px", fontWeight: "600"}}
        >
          Add Task
        </Container>
        <Box
          style={{
            display: "flex",
            width: "60vw",
            alignItems: "center",
            justifyContent: "Space-between",
          }}
        >
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
            style={{
              width: "29vw",
            }}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
            style={{
              width: "29vw",
            }}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            width: "60vw",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          mt={3}
        >
          <FontAwesomeIcon icon={faCalendarDay} size="2x" />
          <Button
            style={{
              backgroundColor: "#145D84",
              color: "white",
            }}
          >
            Add
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AddTask;
