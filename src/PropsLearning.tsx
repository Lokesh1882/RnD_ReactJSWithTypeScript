import React from "react";

class PropsLearning extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Your First Name - {this.props.firstName}</h1>
        <h2> Your Last Name - {this.props.lastName}</h2>
      </div>
    );
  }
}

export default PropsLearning;
