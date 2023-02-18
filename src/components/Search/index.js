import React, { useState } from "react";

const Search = ({ onSubmitProps }) => {
  const [term, setTerm] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    onSubmitProps(term);
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="search the video"
        className="p-2 border my-2"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
    </form>
  );
};
export default Search;
