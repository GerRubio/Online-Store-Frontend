import React from "react";
import ProductDetailingItem from "./Product-Detail-Item";
import { connect } from "react-redux";
import fetchApi from "../../modules/fetch-api";

class ProductDetailing extends React.Component {
  constructor(props) {
    super(props);
    
    this.id = this.props.id;
  }
  componentDidMount() {
    const { loadProducts } = this.props;

    // API
    fetchApi("get", `http://localhost:8080/v1/product/${this.id}`)
      .then(json => {
        loadProducts(json);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { addToCart, removeFromCart, products, cart } = this.props;

    return (
      <div className="product-listing">
        {
          <ProductDetailingItem
            product={products}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartItem={cart.filter(cartItem => cartItem.id === products.id)[0]}
          />
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailing);
