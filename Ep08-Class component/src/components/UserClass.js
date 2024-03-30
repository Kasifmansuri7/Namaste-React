import React from "react";

class User extends React.Component {
  constructor(props) {
    // we have to call super keyword to invoke the parent class constructor and pass the props so that parent class can access it

    super(props);
    // for state variable
    this.state = {
      count: 0,
      kashif: "kasif",
    };
  }

  componentDidMount() {
    console.log("Component mounted!");
  }

  componentDidUpdate(a) {
    console.log("State updated");
  }
  // this method used to render element of this component to the page
  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <h1>{this.props.location}</h1>
        <button
          onClick={() => {
            // for state updation
            // whenever we call this setState method it will only update state variable which were passed in here, the rest of the state variable will not get affected. React will not touch those variables
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }));
          }}
        >
          {this.state.count}
        </button>
        <h1>{this.state.kashif}</h1>
      </>
    );
  }
}

const res = new User({ name: "kashif" });
console.log("res: ", res);

export default User;
