import React, { Component } from "react";

class NewBook extends Component {
  state = { bookName: "", writer: "", description: "" };

  constructor(props) {
    super(props);
    // this.handleOnChange = this.handleOnChange.bind(this);
    // this.handelOnsubmit = this.handelOnsubmit.bind(this);
    this.bind(["handleOnChange", "handelOnsubmit"]);
  }
  bind = ([...args]) => {
    args.forEach((arg) => (this[arg] = this[arg].bind(this)));
  };
  handleOnChange = (e) => {
    const { value, id } = e.target;
    // console.log(value, id);
    this.setState({ [id]: value });
  };
  handelOnsubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { bookName, writer, description } = this.state;
    return (
      <div>
        <h3>Add new book</h3>
        <form action="" onSubmit={this.handelOnsubmit}>
          <label htmlFor="bookName">Book Name</label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={this.handleOnChange}
          />
          <label htmlFor="writer">Writer</label>
          <input
            type="text"
            id="writer"
            value={writer}
            onChange={this.handleOnChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={this.handleOnChange}
          />
          <input className="text-center" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBook;
