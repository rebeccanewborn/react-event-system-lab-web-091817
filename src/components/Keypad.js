// Code Keypad Component Here
import React from "react";
class Keypad extends React.Component {
  handlePassword() {
    console.log("Entering password...");
  }
  render() {
    return <input type="password" onKeyUp={this.handlePassword} />;
  }
}

export default Keypad;
