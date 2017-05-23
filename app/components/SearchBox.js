import React from 'react';

const SearchBox = () =>{

  return (
    <form id="search-box">
      <div className="twelve columns" id="search-options">
        <input
          onChange={this.props.handleSearch}
          type='text'
          value={this.props.value}
        />
      </div>
    </form>
  );
};

export default SearchBox;
