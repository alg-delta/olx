import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

import data from "./data";
import { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import data1 from "./data1";
import data2 from "./data2";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };

  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  return (
    <>
      <BrowserRouter basename="/olx/">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Main products={data} add={add} />
                <Cart cartItems={cartItems} add={add} remove={remove} />
              </div>
            }
          />
          <Route path="/config" element={<Main products={data1} add={add} />} />
          <Route path="/obyava" element={<Main products={data2} add={add} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
