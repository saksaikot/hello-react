import axios from "axios";
import fetch from "cross-fetch";

import React, { Component } from "react";

class Fetch extends Component {
  componentDidMount() {
    // fetch("http://localhost:3001/dishes")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    axios.post("http://localhost:3001/dishes", {
      name: "Fried Chicken",
      price: 100,
    });
    axios
      .get("http://localhost:3001/dishes")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
  }

  render() {
    return <div></div>;
  }
}

export default Fetch;
