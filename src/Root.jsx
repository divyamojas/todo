import { Box } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

export default function Root({ theme, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else navigate("/signIn");
    });
    unsubscribe();
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.light,
      }}
    >
      {children}
    </Box>
  );
}
