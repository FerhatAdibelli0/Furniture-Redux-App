import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiSliceActions } from "../../redux/ui";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(uiSliceActions.isShown());
  };

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
