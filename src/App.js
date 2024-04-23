import React, { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import { CssBaseline } from "@material-ui/core";

// import { Products, Navbar } from "./components"
const App = () => {
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    console.log(response);
    setCart(response);
  };

  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity);
    console.log(cart);
    setCart(cart);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    console.log(quantity);
    const cart = await commerce.cart.update(productId, { quantity });
    console.log(cart);
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    console.log("EMPTY CART");
    const cart  = await commerce.cart.empty();
    setCart(cart);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // console.log(cart);
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          totalItems={cart.total_items}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          <Route exact path="/">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout" exact>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
