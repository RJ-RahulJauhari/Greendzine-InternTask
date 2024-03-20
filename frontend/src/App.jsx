import "./App.scss";
import { Routes, Route} from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import EmployeePage from "./Pages/EmployeePage/EmployeePage";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/employee" element={<EmployeePage></EmployeePage>}></Route>
          <Route path="/employee/:id" element={<HomePage></HomePage>}></Route>
        </Routes>
      </UserContextProvider>
  );
}

export default App;