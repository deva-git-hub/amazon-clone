import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/editorial/GW-Editorial_New_1150x323._CB408892266_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div className="checkout__basketinfo">
            <h2>Basket Was Empty</h2>
          </div>
        ) : (
          <div className="checkout__basketinfo">
            <h2>Your Basket</h2>
          </div>
        )}
        {basket.map((item) => (
          <Checkoutproduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>

      {basket.length > 0 && (
        <div className="checkoutproduct__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
