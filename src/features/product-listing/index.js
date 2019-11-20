import React from "react";
import ProductListingItem from "./Product-List-Item";
import { connect } from "react-redux";
import fetchApi from "../../modules/fetch-api";

class ProductListing extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;

    // API
    fetchApi("get", "http://localhost:8080/v1/products")
      .then(json => {
        loadProducts(json);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { addToCart, removeFromCart, products, cart } = this.props;
    return (
      <div className="product-listing">
        {products.length > 0
          ? products.map(product => (
              <ProductListingItem
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartItem={
                  cart.filter(cartItem => cartItem.id === product.id)[0]
                }
              />
            ))
          : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: products => {
      dispatch({ type: "LOAD", payload: products });
    },
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
