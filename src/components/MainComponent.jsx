import React, { Component } from "react";
import books from "../datas/books";
import Book from "./ui/Book";
import NewBook from "./items/NewBook";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import BookDetails from "./items/BookDetails";
import NewBookUncontrolled from "./items/NewBookUncontrolled";
import Fetch from "./items/Fetch";

class MainComponent extends Component {
  state = {
    books: books,
    bookSelected: null,
  };

  render() {
    const { bookSelected } = this.state;
    return (
      <div className="App">
        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
            {bookSelected && (
              <li>
                <NavLink to={"/book/" + bookSelected.id}>
                  {bookSelected.name}
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/fetch/">Fetch</NavLink>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Switch>
            <Route
              path="/books"
              exact
              render={() => (
                <Book
                  state={this.state}
                  bookClickHandle={this.bookClickHandle}
                />
              )}
            />
            {/* <Route path="/new-book" exact render={() => <NewBook />} /> */}
            <Route path="/new-book" exact component={NewBook} />
            {/* // route props will send if component tag is used // or else render is
          used then that Component need to export inside withRoute function */}
            <Route
              path="/book/:id"
              render={() => bookSelected && <BookDetails book={bookSelected} />}
            ></Route>
            <Route path="/fetch" render={() => <Fetch />}></Route>
            <Redirect from="/" to="/books">
              {" "}
            </Redirect>
          </Switch>
        </div>
      </div>
    );
  }
  bookClickHandle = (bookID) => {
    const book = this.state.books.filter((book) => book.id === bookID)[0];
    this.setState({ bookSelected: book });
    console.log("bookClickHandle", bookID);
  };
  // handleInputNameChange = (e, book) => {
  //   // console.log(e.target, book);
  //   book.name = e.target.value;
  //   const books = [...this.state.books];
  //   books[book.index] = book;
  //   this.setState({ books });
  // };
}

export default MainComponent;
