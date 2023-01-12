import { Box, Typography } from "@mui/material";
import React from "react";

function DayHeader({ theme }) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline" }}>
      <Typography variant="h3">Today</Typography>
      <Typography
        variant="subtitle2"
        ml={1}
        color={theme.palette.text.secondary}
      >
        Wed 11 Jan
      </Typography>
    </Box>
  );
}

export default DayHeader;
