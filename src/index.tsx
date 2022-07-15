import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CustomerContextProvider from "./store/customer-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CustomerContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CustomerContextProvider>
);
