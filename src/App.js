import "./App.css";
import "boxicons";
import React from "react";
import Header from "./Header";
import Slider from './Slider'  
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider/>
      <Product />
    </div>
  );
}

export default App;
