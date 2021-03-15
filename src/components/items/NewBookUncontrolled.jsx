import React, { Component, createRef } from "react";

class NewBookUncontrolled extends Component {
  state = { bookName: "", writer: "", description: "" };

  constructor(props) {
    super(props);

    this.bookName = createRef();
    this.writer = createRef();
    this.description = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.bookName.current.value);
    console.log(this.writer.current.value);
    console.log(this.description.current.value);
  };

  render() {
    return (
      <div>
        <h3>Add new book</h3>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="bookName">Book Name</label>
          <input type="text" id="bookName" ref={this.bookName} />
          <label htmlFor="writer">Writer</label>
          <input type="text" id="writer" ref={this.writer} />
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" ref={this.description} />
          <input className="text-center" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBookUncontrolled;
