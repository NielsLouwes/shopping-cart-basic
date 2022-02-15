import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="row">
        <Main />
        <Basket />
      </div>
    </React.Fragment>
  );
}

export default App;
