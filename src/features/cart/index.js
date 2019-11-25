import React from "react";
import { connect } from "react-redux";

function sort(items) {
  return items.sort((a, b) => a.id < b.id);
}

function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <body>
        {sort(props.cart).map(item => (
          <tr>
            <td className="cart-name">{item.name} -</td>
            <td className="cart-qty">{item.quantity}</td>
            <td>
              <button onClick={() => props.addToCart(item)}>+</button>
              <button onClick={() => props.removeFromCart(item)}>-</button>
            </td>
            <td>
              <button onClick={() => props.removeAllFromCart(item)}>
                Remove all from Cart
              </button>
            </td>
          </tr>
        ))}
      </body>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
