import { useSelector } from "react-redux";

import themes from "./theme";

import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { auth } from "./Firebase";
// import SignIn from "./onboarding/SignIn";
// import SignUp from "./onboarding/SignUp";
// import Completed from "./pages/Completed";
// import Archived from "./pages/Archived";
// import Bin from "./pages/Bin";
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import Archived from "./pages/Archived";
import Bin from "./pages/Bin";
import SignIn from "./onboarding/SignIn";
import SignUp from "./onboarding/SignUp";

function App() {
  const mode = useSelector((state) => state.mode.value);
  const theme = mode ? themes.lightTheme : themes.darkTheme;

  const { currentUser } = auth;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            exact
            path="/"
            element={currentUser ? redirect("/home") : redirect("/signin")}
          />
          <Route path="/signin" element={<SignIn theme={theme} />} />
          <Route path="/signup" element={<SignUp theme={theme} />} />
          <Route
            path="/tasks"
            element={<Tasks theme={theme} header="Tasks" />}
          />
          <Route
            path="/completed"
            element={<Completed theme={theme} header="Completed" />}
          />
          <Route
            path="/archived"
            element={<Archived theme={theme} header="Archived" />}
          />
          <Route path="/bin" element={<Bin theme={theme} header="Bin" />} />
          {/* <Route path = "/dashboard" element = {<Dashboard/>}/> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
