import { Box } from "@mui/material";
import React from "react";
import Home from "./Home/Home";

function Body() {
  return (
    <Box sx={{ backgroundColor: "#EBEBEB", minHeight: "100vh" }} px={4}>
      <Box pt={8} />
      <Home />
      {/* <Tasks/>
    <Completed/>
    <Archive/>
    <Profile/>
    <MyyAccount/> */}
    </Box>
  );
}

export default Body;
