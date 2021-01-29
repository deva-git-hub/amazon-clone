import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Button } from "@material-ui/core";
import "./Checkoutproduct.css";
import { useStateValue } from "./StateProvider";

function Checkoutproduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} alt="" />

      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>

        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <Rating name="read-only" value={rating} readOnly />

        <Button onClick={removeFromBasket}>Remove from basket</Button>
      </div>
    </div>
  );
}

export default Checkoutproduct;
