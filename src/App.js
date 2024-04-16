import React, { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";
import Navbar from "./components/Navbar/Navbar";
// import { Products, Navbar } from "./components"
const App = () => {
  // const [cart, setCart] = useState({});

  // const fetchCart = async () => {
  //   await commerce.cart.retrieved();
  //   setCart(await commerce.cart.retrieve());
  // };

  // const handleAddToCart = async (productId, quantity) => {
  //   const response = await commerce.cart.add(productId, quantity);

  //   setCart(item.cart);
  // };
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div>
      <Navbar />
      <Products
      // products={products}
      // onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default App;
