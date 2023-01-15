import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signin } from "../reducers/authSlice";

export default function SignIn({ theme }) {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleClick() {
    try {
      await signInWithEmailAndPassword(auth, creds.email, creds.password).then(
        () => {
          navigate("/tasks");
          dispatch(signin({ email: creds.email, password: creds.password }));
          setAuthError(false);
        }
      );
    } catch (err) {
      setAuthError(true);
    }
  }
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
          height: "48vh",
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
          <Typography variant="h4">Sign In!</Typography>
          <Divider />
          {authError && (
            <Alert severity="warning">
              Please Check you Email and Password!
            </Alert>
          )}{" "}
          <Stack spacing={2} sx={{ minWidth: 300 }}>
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
                sx={{ fontWeight: 600, cursor: "pointer" }}
                onClick={() => navigate("/reset-password")}
              >
                Forgot Password?
              </Typography>
              {/* rem*/}
              <Button
                variant={
                  creds.email && creds.password ? "contained" : "disabled"
                }
                type="submit"
                onClick={handleClick}
              >
                Sign In
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Don't have an account?</Typography>
              <Link
                to="/signUp"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="caption"
                  color={theme.palette.primary.main}
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Sign Up
                </Typography>
              </Link>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
