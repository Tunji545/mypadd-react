import React from 'react';

const SearchBar = ({filteredText, inStockOnly, onChange, onClick}) => {

  return (
    <form>
      <input type="text" placeholder="Search... " value={filteredText} onChange={onChange} onClick={onClick} />
      <p>
        <input type="checkbox" checked={inStockOnly} />
        {" "} Only show products in stock
      </p>
    </form>
  )
}

export default SearchBar
