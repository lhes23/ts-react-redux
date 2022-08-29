import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowAllProducts from "./components/ShowAllProducts";
import FilterProducts from "./components/FilterProducts";

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   qty: number;
// }

// const initialProduct: Product[] = [
//   { id: 1, name: "banana", price: 30, qty: 1 },
//   { id: 2, name: "apple", price: 30, qty: 1 },
//   { id: 3, name: "grapes", price: 30, qty: 1 },
// ];

function App() {
  // const [products, setProducts] = useState<Product[]>(initialProduct);
  // const [filterProd, setFilterProd] = useState<string>("");


  return (
    <div className="App">
      <FilterProducts />
      <ShowAllProducts />
    </div>
  );
}

export default App;
