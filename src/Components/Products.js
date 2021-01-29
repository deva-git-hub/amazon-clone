import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./Products.css";
import { useStateValue } from "./StateProvider";

function Products({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating name="read-only" value={rating} readOnly />
      </div>

      <img src={image} alt="" />

      <button className="product__button" onClick={addToBasket}>
        Add To Cart
      </button>
    </div>
  );
}

export default Products;
