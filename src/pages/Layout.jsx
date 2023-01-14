import React from "react";
import Header from "../components/header/Header";
// import Header from "./components/header/Header";

export default function Layout({ theme, component: Component }) {
  return (
    <React.Fragment>
      <Header theme={theme} />
      {(props) => <Component {...props} />}
    </React.Fragment>
  );
}
