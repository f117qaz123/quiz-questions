import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('Toronto');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };


  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type='text'
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
        <button type='submit'>search</button>
      </form>
    </div>
  );
};

export default SearchBar;
