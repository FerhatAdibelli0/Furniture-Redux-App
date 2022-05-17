import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((fun) => (
          <CartItem
            key={fun.id}
            item={{
              id: fun.id,
              title: fun.name,
              quantity: fun.quantity,
              total: fun.totalprice,
              price: fun.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
