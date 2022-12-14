import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import React from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-action-creator";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  // latest cart state
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // every time cart state changes, send HTTP request to the backend
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  // fetch data from Database when  the App loads
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  return (
    <React.Fragment>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
