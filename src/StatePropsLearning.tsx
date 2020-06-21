import React from "react";
import PropsLearning from "./PropsLearning";

class StatePropsLearning extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Rajesh",
      lastName: "Patil"
    };
    console.log("constructor");
    console.log("--------------------------------------");
  }

  /*
  getDefaultProps(){
    console.log('getDefaultProps');
    console.log("--------------------------------------");
  }
*/
  getInitialState() {
    console.log("getInitialState");
    console.log("--------------------------------------");
  }

  render() {
    console.log("Reder");
    console.log("--------------------------------------");
    return (
      <div>
        <PropsLearning
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <button type="button" onClick={this.ChangeUserDetails}>
          Change UserDetails
        </button>
      </div>
    );
  }

  /* Component Mounting Phase*/
  componentWillMount() {
    console.log("Component Will MOUNT!");
    console.log("--------------------------------------");
  }
  componentDidMount() {
    console.log("Component Did MOUNT!");
    console.log("--------------------------------------");
  }

  /*Button click Event Handler*/
  ChangeUserDetails = () => {
    console.log("ChangeUserDetails function call.");
    console.log("--------------------------------------");
    this.setState({
      firstName: "Paresh",
      lastName: "Kadam"
    });
  };

  /* Component Updating Phase */
  componentWillReceiveProps(newProps) {
    console.log("Component Will Recieve Props!");
    console.log("--------------------------------------");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("should Component Update");
    console.log("newProps: " + newProps);
    console.log("newState: " + newState);
    console.log("newState.firstName: " + newState.firstName);
    console.log("newState.lastName: " + newState.lastName);
    console.log("--------------------------------------");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component Will UPDATE!");
    console.log("nextProps: " + nextProps);
    console.log("nextState: " + nextState);
    console.log("nextState.firstName: " + nextState.firstName);
    console.log("nextState.lastName: " + nextState.lastName);
    console.log("--------------------------------------");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did UPDATE!");
    console.log("PreveProps: " + prevProps);
    console.log("prevState: " + prevState);
    console.log("prevState.firstName: " + prevState.firstName);
    console.log("prevState.lastName: " + prevState.lastName);
    console.log("--------------------------------------");
  }
  componentWillUnmount() {
    console.log("--------------------------------------");
    console.log("Component Will UNMOUNT!");
  }
}

export default StatePropsLearning;
