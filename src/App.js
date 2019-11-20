import React, { Component } from "react";
import Router from "./Router";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = ({ cart }) => (
  <nav>
    <ul className="top-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          Cart (
          {cart.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}
          )
        </NavLink>
      </li>
      <li>
        <NavLink to="/checkout">Checkout</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="page-container">
          <Navigation {...this.props} />
          <Router />
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function componentDidMount() {
  document.title = "The Sim Racing Store";
}

export default withRouter(connect(mapStateToProps, componentDidMount)(App));
