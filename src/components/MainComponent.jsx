import React, { Component } from "react";
import books from "../datas/books";
import Book from "./ui/Book";
import NewBook from "./items/NewBook";
class MainComponent extends Component {
  state = {
    books: books,
  };

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new-book">New Book</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <Book state={this.state} />
          <NewBook />
        </div>
      </div>
    );
  }

  // handleInputNameChange = (e, book) => {
  //   // console.log(e.target, book);
  //   book.name = e.target.value;
  //   const books = [...this.state.books];
  //   books[book.index] = book;
  //   this.setState({ books });
  // };
}

export default MainComponent;
