
const Book=props=>{
  const {name,writer}=props.book;
  return(
    <div>
      <h4>Book: {name}</h4>
      <p>Writer: {writer}</p>
      <input type="text" name="" id="" onKeyUp={(e)=>props.event(e,props.book)} placeholder="Change Book Name"/>
    </div>
  );
}

export default Book;