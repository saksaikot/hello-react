import React from "react";

export default function BookDetails(props) {
  const {name,writer,description}=props.book;
  return <div>
    <h2>{name}</h2>
    <h5>{writer}</h5>
    <p>
      {description}
    </p>

  </div>;
}
