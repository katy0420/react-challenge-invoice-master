import { render, screen, waitFor, cleanup } from "@testing-library/react";
import Customers from "../page/Customers";
import CustomerContextProvider from "../store/customer-context";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const mockData = {
  customers: []
};

beforeEach(() => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      status: 400,
      json: () => Promise.resolve(mockData),
    })
  );
});

afterEach(cleanup);

describe("Customers component", () => {
  test("Display error message if fetch call is failed", async () => {
    render(
      <CustomerContextProvider>
        <BrowserRouter>
          <Customers />
        </BrowserRouter>
      </CustomerContextProvider>
    );
    await waitFor(() => {
        expect(screen.getByText('No Data is avilable')).toBeInTheDocument();
    })
  });
});
