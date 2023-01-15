import { useSelector } from "react-redux";

import themes from "./theme";

import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import Archived from "./pages/Archived";
import Bin from "./pages/Bin";
import SignIn from "./onboarding/SignIn";
import SignUp from "./onboarding/SignUp";
import { auth } from "./Firebase";
import PasswordReset from "./onboarding/PasswordReset";

function App() {
  const mode = useSelector((state) => state.mode.value);
  const theme = mode ? themes.lightTheme : themes.darkTheme;

  const { currentUser } = auth;

  console.log(auth);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Navigate
              replace
              to={currentUser !== null ? "/tasks" : "/signin"}
            />
          }
        />
        <Route path="/signin" element={<SignIn theme={theme} />} />
        <Route path="/signup" element={<SignUp theme={theme} />} />
        <Route
          path="/reset-password"
          element={<PasswordReset theme={theme} />}
        />
        <Route path="/tasks" element={<Tasks theme={theme} header="Tasks" />} />
        <Route
          path="/completed"
          element={<Completed theme={theme} header="Completed" />}
        />
        <Route
          path="/archived"
          element={<Archived theme={theme} header="Archived" />}
        />
        <Route path="/bin" element={<Bin theme={theme} header="Bin" />} />
        {/* <Route path="/profile" element={<Profile theme={theme}  />} /> */}
        {/* <Route path = "/dashboard" element = {<Dashboard theme = {theme}/>}/> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
