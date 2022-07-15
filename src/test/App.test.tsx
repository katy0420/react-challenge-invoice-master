import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import CustomerContextProvider from "../store/customer-context";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

describe("App component", () => {
  test("renders Wave Invoiving System homepage", () => {
    render(
      <CustomerContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CustomerContextProvider>
    );
    expect(screen.getByText('Wave Invoicing System')).toBeInTheDocument();
  });
  
});
