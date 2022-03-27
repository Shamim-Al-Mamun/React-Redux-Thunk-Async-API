import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Catagory from "./components/Catagory";
import ProductsContainer from "./components/ProductsContainer";
import ProductDetails from "./components/ProductsDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Catagory />
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
