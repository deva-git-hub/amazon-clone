import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import StripeCheckout from "react-stripe-checkout";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  let subtotal = 0;
  const handleToken = (token, addresses) => {
    console.log(token, addresses);
  };
  return (
    <div className="subtotal">
      <h3>SUBTOTAL</h3>
      {basket.map((item) => {
        subtotal += Number(item.price);
        return <p>$ {item.price}</p>;
      })}
      <hr />
      <p>
        <small>$ </small>
        <strong>{subtotal}</strong>
      </p>
      <label style={{ alignItems: "center", marginBottom: "4px" }}>
        <input type="checkbox" /> This Order Contains Gift
      </label>
      <StripeCheckout
        stripeKey="pk_test_51HEfJMCos0s97eq30D8a2a2emUpt4cETq48BtAVVxspIUQGlHNuBazvXS2N9lEwUxpNmIczg7nNbc4XOqEsbTkZY003PRsmYFU"
        token={handleToken}
       /* billingAddress={}
        shippingAddress={}*/
        amount={subtotal}
      />
    </div>
  );
}

export default Subtotal;
