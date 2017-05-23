import Products from './Products';
import React from 'react';
import SearchBox from './SearchBox';

const handleClick = (props) => {
  props.displaySearch();
}

const handleSortType = (event) => {
  const sortValue = event.target.name;

  this.props.handleSort(sortValue);
}

const ProductsLists = (props) => {

  const products = props.products.map((product, index) => {
    return <Products
      displaySearch={this.displaySearch}
      handleAddToCart={props.handleAddToCart}
      handleSearch={props.handleSearch}
      inputValue={props.inputValue}
      key={index}
      product={product}
      searchFilter={searchFilter}
      value={props.value}
    />
  });

  return (
    <div id="product-list">
      <div className="row" id="products-header">
        <h1>PRODUCTS</h1>
      </div>
      <div className="row">
        <div className="eight columns">
          <ul id="filter-sort">
            <li id="filter-options">FILTER BY LINE:</li>
            <li><a href="#" name="all" onClick={handleSortType}>ALL</a></li>
            <li><a href="#" name="beard" onClick={handleSortType}>BEARD</a></li>
            <li><a href="#" name="moustache" onClick={handleSortType}>MUSTACHE</a></li>
          </ul>
        </div>
        <div className="four columns" id="search-img">
          <img onClick={handleClick} src="images/search-icon.png" />
        </div>
          {props.searchVisible ? <SearchBox
            handleSearch={props.handleSearch}
            value={props.value} /> : null
          }
      </div>
      <div className="row" id="products-page" >
        { products }
      </div>
    </div>
  );
};

export default ProductsLists;
