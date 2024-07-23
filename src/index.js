import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
        </div>
        <ButtonGradient />
      </>
    </Router>
  </React.StrictMode>
);
