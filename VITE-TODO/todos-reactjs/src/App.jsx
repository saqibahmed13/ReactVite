import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddingTodos from "./AddingTodos.jsx";
import DeletingTodos from "./DeletingTodos.jsx";

function App() {
  return (
    <>
      <AddingTodos />
      {/* <DeletingTodos/> */}
    </>
  );
}

export default App;
