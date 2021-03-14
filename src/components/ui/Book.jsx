import React from "react";
import BookItem from "../items/Book";

export default function Book(props) {
  const { books } = props.state;

  return books.map((book) => (
    <BookItem
      key={book.id}
      book={book}
      // event={this.handleInputNameChange}
      bookClickHandle={props.bookClickHandle}
    />
  ));
}
