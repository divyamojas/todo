import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signup } from "../reducers/authSlice";

export default function SignUp({ theme }) {
  const [creds, setCreds] = useState({
    email: "",
    name: "",
    password: "",
    passwordConf: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  async function handleClick() {
    createUserWithEmailAndPassword(auth, creds.email, creds.password)
      .then(dispatch(signup({ email: creds.email, password: creds.password })))
      .then(navigate("/home"));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Card
        style={{
          width: "80vw",
          height: "60vh",
          maxWidth: 350,
          backgroundColor: theme.palette.background.default,
          boxShadow: theme.shadows[20],
          borderRadius: 10,
        }}
        // raised
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "100%",
          }}
        >
          <Typography variant="h4">Sign Up!</Typography>
          <Divider />
          <Stack spacing={2} sx={{ minWidth: 300 }}>
            <TextField
              value={creds.name}
              name="name"
              variant="standard"
              placeholder="enter name"
              type="name"
              required
              onChange={handleChange}
            />
            <TextField
              value={creds.email}
              name="email"
              variant="standard"
              placeholder="enter email"
              type="email"
              required
              onChange={handleChange}
            />
            <TextField
              value={creds.password}
              name="password"
              variant="standard"
              placeholder="enter password"
              type="password"
              required
              onChange={handleChange}
            />
            <TextField
              value={creds.passwordConf}
              name="passwordConf"
              variant="standard"
              placeholder="confirm password"
              type="password"
              required
              onChange={handleChange}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="caption"
                color={theme.palette.primary.main}
                sx={{ fontWeight: 600 }}
              />{" "}
              {/* rem*/}
              <Button
                variant={
                  creds.email &&
                  creds.password &&
                  creds.password === creds.passwordConf
                    ? "contained"
                    : "disabled"
                }
                type="submit"
                onClick={handleClick}
              >
                Sign Up
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">
                Already have an account?
              </Typography>
              <Link
                to="/signIn"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="caption"
                  color={theme.palette.primary.main}
                  sx={{ fontWeight: 600, textDecoration: "none" }}
                >
                  {" "}
                  Sign In
                </Typography>
              </Link>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
