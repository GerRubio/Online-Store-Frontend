import React from "react";

export default function AddButton(props) {
  return (
    <button className="btn-add" onClick={() => props.addToCart(props.product)}>
      Add to Cart ({(props.cartItem && props.cartItem.quantity) || 0})
    </button>
  );
}
