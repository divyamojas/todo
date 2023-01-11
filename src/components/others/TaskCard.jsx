import {
  faArchive,
  faCircleNotch,
  faEllipsisH,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

function TaskCard({ task }) {
  return (
    <Box m={2}>
      <Card
        sx={{
          maxWidth: 216,
          minHeight: 72,
          // backgroundColor: "#dadadaa",
          borderRadius: "10px",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -4px 1px rgba(0, 0, 0, 0.25)",
        }}
      >
        <CardContent>
          <Typography variant="caption">Due Today</Typography>
          <Typography variant="body1" color="text.primary">
            {task}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {[faCircleNotch, faArchive, faTrash, faEllipsisH].map(
            (icon, index) => (
              <IconButton aria-label="add to favorites" key={index}>
                <FontAwesomeIcon icon={icon} size="xs" />
              </IconButton>
            )
          )}
        </CardActions>
      </Card>
    </Box>
  );
}

export default TaskCard;