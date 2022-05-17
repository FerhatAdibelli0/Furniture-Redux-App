import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sentCartData, fetchingData } from "./redux/cart-actions";

let initialSent = true;

function App() {
  let isShown = useSelector((state) => state.ui.isShown);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialSent) {
      initialSent = false;
      return;
    }
    if (cart.changed) {
      dispatch(sentCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  if (totalQuantity === 0) {
    isShown = false;
  }

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
