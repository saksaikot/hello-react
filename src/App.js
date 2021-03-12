import "./App.css";
import React, { Component } from "react";

import Book from "./components/Book";

class App extends Component {
  state = {
    books: [
      { name: "Mohapurush", writer: "Humayun Ahmed" },
      { name: "Misir Ali Omnibus", writer: "Humayun Ahmed" },
      { name: "Guha", writer: "Sanjib Chattopadhyay" },
    ],
  };
  handleInputNameChange = (e, book) => {
    // console.log(e.target, book);
    book.name = e.target.value;
    const books = [...this.state.books];
    books[book.index] = book;
    this.setState({ books });
  };
  render() {
    const { books } = this.state;
    return (
      <div className="App">
        <h3>Hello React</h3>
        {books.map((book, index) => (
          <Book book={{ ...book, index }} event={this.handleInputNameChange} />
        ))}
      </div>
    );
  }
}

export default App;
