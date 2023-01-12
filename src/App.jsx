import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import themes from "./theme";

function App() {
  const mode = useSelector((state) => state.mode.value);
  const theme=mode ? themes.lightTheme : themes.darkTheme;

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Header theme = {theme}/>
      <Body theme = {theme}/>
    </ThemeProvider>
  );
}

export default App;
