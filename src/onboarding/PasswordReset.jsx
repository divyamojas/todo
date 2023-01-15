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
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";

export default function PasswordReset({ theme }) {
  const [email, setEmail] = useState("");
  const [authError, setAuthError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleClick() {
    try {
      await sendPasswordResetEmail(auth, email).then(() => {
        setSuccess(true);
        setAuthError(false);
      });
    } catch (err) {
      setAuthError(true);
      console.log(err);
    }
  }
  function handleChange(e) {
    setEmail(e.target.value);
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
          height: "35vh",
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
          <Typography variant="h4">Reset Password</Typography>
          <Divider />
          {authError && (
            <Alert severity="warning">Failed to Reset Password.</Alert>
          )}{" "}
          <Stack spacing={2} sx={{ minWidth: 300 }}>
            {success ? (
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Check your email to reset password!
              </Typography>
            ) : (
              <>
                <TextField
                  value={email}
                  name="email"
                  variant="standard"
                  placeholder="enter email"
                  type="email"
                  required
                  onChange={handleChange}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Button
                    variant={email ? "contained" : "disabled"}
                    sx={{
                      width: "100%",
                    }}
                    type="submit"
                    onClick={handleClick}
                  >
                    Reset Password
                  </Button>
                </Box>
              </>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
