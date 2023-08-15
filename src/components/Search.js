import React from 'react';

const SearchBar = ({ searchValue, setSearchValue, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a specific park"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;