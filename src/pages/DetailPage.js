import React from "react";
import Detail from "../features/detail";

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  render() {
    return (
      <div>
        <h2>Product Detail</h2>
        <Detail id={this.id} />
      </div>
    );
  }
}

export default DetailPage;
