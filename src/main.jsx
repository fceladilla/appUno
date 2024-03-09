import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//ReactDOM es una clase y tiene un metodo que se pasa un solo parametro, un getElementebyId y le dice que le pasa root y despeus lo va a rendeerizar
//dentro de React.StrictMode y este a su vez dentro del elemento que tiene id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
