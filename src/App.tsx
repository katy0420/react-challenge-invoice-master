import "./App.css";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Setting from "./page/Setting";
import Customers from "./page/Customers";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/setting/:id" element={<Setting />} />
      </Routes>
    </Layout>
  );
};

export default App;
