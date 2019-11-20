import React from "react";

export default function RemoveButton(props) {
  return (
    <button className="btn-remove" onClick={() => props.removeFromCart(props.cartItem)}>
      Remove from Cart
    </button>
  );
}
