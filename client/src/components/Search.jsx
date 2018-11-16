import React from 'react';
import FontAwesome from 'react-fontawesome';

const Search = () => (
  <div className="search">
    <input
      className="search__input"
      type="text"
    />
    <button className="search__button">
      <FontAwesome name="search" />
    </button>
  </div>
);

export default Search;
