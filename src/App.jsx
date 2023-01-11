import { CssBaseline, ThemeProvider } from '@mui/material';
import AddTask from './components/addTask/AddTask';
import Body from './components/body/Body';
import Header from './components/header/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme.lightTheme }>
      <CssBaseline/>
      <Header/>
      <Body />
    </ThemeProvider>
  );
}

export default App;
