/* eslint-disable react/prop-types */
import axios from "axios";
import "./HomePage.css";
import "../../components/header.css";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import { ProductsGrid } from "./ProductsGrid";
export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
