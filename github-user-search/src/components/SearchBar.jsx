import React from 'react';

const SearchBar = ({ username, onChange, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a GitHub user"
        value={username}
        onChange={onChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
