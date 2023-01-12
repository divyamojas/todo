import React from "react";
import { Box } from "@mui/material";
import Home from "./Home/Home";

function Body({theme}) {
  return (
    <Box
      sx={{ backgroundColor: theme.palette.background.default, minHeight: "100vh" }}
      px={4}
    >
      <Box pt={8} />
      <Home theme = {theme}/>
      {/* <Tasks/>
    <Completed/>
    <Archive/>
    <Profile/>
    <MyyAccount/> */}
    </Box>
  );
}

export default Body;
