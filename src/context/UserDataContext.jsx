// UserDataContext.jsx
import React, { createContext, useContext, useState } from "react";
import { addEmployee as addEmployeeAPI } from "../api/api";

const UserDataContext = createContext();

export const DataProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  
  const addEmployee = async (employee) => {
    try {
      const response = await addEmployeeAPI(employee);
      setEmployees([...employees, response]);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const contextValue = { employees, addEmployee };

  return (
    <UserDataContext.Provider value={contextValue}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
