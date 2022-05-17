import { uiSliceActions } from "./ui";
import { cartSliceActions } from "./cart";

export const fetchingData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ferhat-s-first-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();

      return data;
    };

    try {
      const responsedata = await fetchData();
      dispatch(
        cartSliceActions.replaceCart({
          items: responsedata.items || [],
          totalQuantity: responsedata.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.setNotification({
          status: "error",
          title: "Error ",
          message: "Getting an failed in Response",
        })
      );
    }
  };
};

export const sentCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.setNotification({
        status: "pending",
        title: "Pending ",
        message: "Request is sent ",
      })
    );

    const sentRequest = async () => {
      const request = await fetch(
        "https://ferhat-s-first-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items:cart.items,totalQuantity:cart.totalQuantity}),
        }
      );

      if (!request.ok) {
        throw new Error("Something wetn wrong!!!");
      }
    };

    try {
      await sentRequest();

      dispatch(
        uiSliceActions.setNotification({
          status: "success",
          title: "Success ",
          message: "Request is sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.setNotification({
          status: "error",
          title: "Error ",
          message: "Getting an failed",
        })
      );
    }
  };
};
