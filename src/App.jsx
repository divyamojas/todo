import EntryBlock from "./EntryBlock";
import ListBlock from "./ListBlock";
import Menu from "./Menu";
import "./App.css";
import { Card } from "@mui/material";

function App() {
  return (
    <div className="root">
      <Menu />
      <Card className="mainBody">
        <ListBlock />
        <EntryBlock />
      </Card>
    </div>
  );
}

export default App;
