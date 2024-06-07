import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>GitHub Users Data</h1>
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
