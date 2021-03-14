import { Link, withRouter } from "react-router-dom";

const Book = (props) => {
  // console.log("Book",props)
  const { name, writer, id } = props.book;
  return (
    <Link to={`/book/${id}`}>
      <div className="book" onClick={() => props.bookClickHandle(id)}>
        <h4>Book: {name}</h4>
        <p>Writer: {writer}</p>
      </div>
    </Link>
  );
};

export default withRouter(Book);

/* <input
type="text"
onKeyUp={(e) => props.event(e, props.book)}
placeholder="Change Book Name"
/> */
