import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import themes from "./theme";

import SignIn from "./onboarding/SignIn";
import SignUp from "./onboarding/SignUp";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import Root from "./Root";

function App() {
  
  const mode = useSelector((state) => state.mode.value);
  
  const theme = mode ? themes.lightTheme : themes.darkTheme;
  

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route exact path = "/" element = {<Root/>}/>
          <Route path="/signIn" element={<SignIn theme={theme} />} />
          <Route path="/signUp" element={<SignUp theme={theme} />} />
          <Route
            path="/home"
            element={
              <>
                <Header theme={theme} />
                <Body theme={theme} />
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
