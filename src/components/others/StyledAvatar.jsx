import { Avatar } from "@mui/material";
import React from "react";

function StyledAvatar({ img, size }) {
  return (
    <Avatar
      alt="You"
      src={img}
      sx={{ height: size, width: size, backgroundColor: "#001e3c" }}
    >
      D
    </Avatar>
  );
}

export default StyledAvatar;
