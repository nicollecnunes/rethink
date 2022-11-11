import React from "react";
import Home from "./Home";
import Form from "./Form";
import { Routes, Route } from "react-router-dom";
import './global.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
