import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img className="checkout__ad" src="banner.png" alt="" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <small>
            You have no item in your basket. To buy one or more item click "Add To Basket" next to the item.
          </small>
        </div>
      ) : (
        <div className="checkout__info">
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* list of checkout products */}
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
