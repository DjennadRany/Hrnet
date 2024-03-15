// index.js
import React from "react";
import ReactDOM from "react-dom";
import { DataProvider } from "./context/UserDataContext";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";
import Error from "./components/error/Error";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import CreateEmployee from "./components/createEmployee/CreateEmployee";
import EmployeeList from "./components/employeeList/EmployeeList";
import "./App.css";

function BasicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
