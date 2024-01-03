import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import "./Subtotal.css"
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(val) => (
          <>
            <p>
              Subtotal({basket?.length} items): <strong>{`${val}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="checkout__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
