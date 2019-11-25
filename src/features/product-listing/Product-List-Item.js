import React from "react";
import AddBtn from "./Add-Btn";
import RemoveBtn from "./Remove-Btn";
import { Link } from "react-router-dom";

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <Link to={`/product/${props.product.id}`} activeClassName="active">
        {props.product.name}
      </Link>
      <img height={100} title={props.product.name} src={props.product.image} alt="product-img"/>
      <div className="product-price">{props.product.price} €</div>
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
