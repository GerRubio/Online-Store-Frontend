import React from "react";
import fetchApi from "../../modules/fetch-api";

class Order extends React.Component {
  state = {
    order: null
  };

  componentDidMount() {
    
    // API
    fetchApi("get", `http://localhost:8080/v1/orders/${this.props.id}`).then(
      json => {
        this.setState({
          order: json
        });
      }
    );
  }

  renderOrder() {
    const { name, mail, order_items } = this.state.order;

    return (
      <div>
        <h3>Order info</h3>
        <div>Name: {name}</div>
        <div>E-Mail: {mail}</div>

        <h4>Items</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                quantity,
                product: { name, image, price }
              } = item;

              return (
                <li>
                  <img src={image} width={32} alt="product-img" />
                  {name}({quantity} @ €{price} = €
                  {parseFloat(quantity) * parseFloat(price)})
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  render() {
    const { order } = this.state;

    return <div>{order ? this.renderOrder() : "Loading..."}</div>;
  }
}

export default Order;
