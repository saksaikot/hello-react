const Book = (props) => {
  const { name, writer } = props.book;
  return (
    <div className="book">
      <h4>Book: {name}</h4>
      <p>Writer: {writer}</p>
    </div>
  );
};

export default Book;

/* <input
type="text"
onKeyUp={(e) => props.event(e, props.book)}
placeholder="Change Book Name"
/> */
