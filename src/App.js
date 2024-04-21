import React, { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import { Products, Navbar } from "./components"
const App = () => {
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    await commerce.cart.retrieve();
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };
  const handleUpdateCartQty = async(productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, {quantity})
    setCart(cart)
  }

  const handleRemoveFromCart = async(productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }

  const handleEmptyCart = async() => {
    const { cart } = await commerce.cart.empty();
    setCart=(cart)
  }
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <Router> 
      <div>
    <Navbar totalItems={cart.total_items} />
      
      <Switch>
        <Route exact path="/">
        <Products products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/cart">
       <Cart 
       cart={cart}
       handleUpdateCartQty={handleUpdateCartQty}
       handleEmptyCart={handleEmptyCart}
       handleRemoveFromCart={handleRemoveFromCart}
       />

      </Route>

      </Switch>
    </div>
    </Router>
  );
};

export default App;
