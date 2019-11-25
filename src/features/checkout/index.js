import React from "react";
import { connect } from "react-redux";
import fetchApi from "../../modules/fetch-api";

import Cart from "../cart";
import CheckoutForm from "./form";

function submitOrder(values, cart) {
  const { name, mail } = values.order;

  // API
  fetchApi("post", "http://localhost:8080/v1/add-order", {
    order: {
      name,
      mail,
      order_items: cart.map(item => ({
        product_id: item.id,
        quantity: item.quantity
      }))
    }
  }).then(json => {
    if (json.errors) {
      alert("Something went wrong!");

      return;
    }

    document.location.href = `/orders/${json.id}`;
  });
}

function Checkout(props) {
  const { cart } = props;

  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <Cart />
      </div>

      <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Checkout);
