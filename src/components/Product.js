import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className="star__icon" />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addtoBasket}> Add to Basket</button>
    </div>
  );
}

export default Product;
