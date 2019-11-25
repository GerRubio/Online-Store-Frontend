import React from "react";
import AddBtn from "../product-listing/Add-Btn";
import RemoveBtn from "../product-listing/Remove-Btn";

export default function ProductDetailItem(props) {
  return (
    <div className="product-detail-item">
      <h3>{props.product.name}</h3>
      <img height={100} title={props.product.name} src={props.product.image} alt="product-img" />
      <div>{props.product.description}</div>
      <h5>{props.product.price} €</h5>
      <div>
        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />

        {props.cartItem ? (
          <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
}
