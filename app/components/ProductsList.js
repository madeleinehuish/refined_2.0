import Products from './Products';
import React, { Component } from 'react';
import SearchBox from './SearchBox';



// const ProductsList = (props) => {
//   return (
//     <div>test</div>
//   );
// }

class ProductsList extends Component {

  // render() {
  //   return (
  //     <div>test</div>
  //   )
  // }

  constructor(props) {
    super(props);
    this.handleSortType = this.handleSortType.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // console.log('productslists props: ', props);
  }

  // componentWillMount() {
  //   console.log('did mount: ', this.props);
  // }

  handleSortType(event) {
    const sortValue = event.target.name;

    this.props.handleSort(sortValue);
  }

  handleClick(props){
    this.props.displaySearch();
  }

  render(){
    console.log('props in productsLists: ', this.props);
    const products = this.props.products.map((product, index) => {

      return <Products
        displaySearch={this.handleClick}
        handleAddToCart={this.props.handleAddToCart}
        handleSearch={this.props.handleSearch}
        inputValue={this.props.inputValue}
        key={index}
        product={product}
        // searchFilter={searchFilter}
        value={this.props.value}
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
              <li><a href="#" name="all" onClick={this.handleSortType}>ALL</a></li>
              <li><a href="#" name="beard" onClick={this.handleSortType}>BEARD</a></li>
              <li><a href="#" name="moustache" onClick={this.handleSortType}>MUSTACHE</a></li>
            </ul>
          </div>
          <div className="four columns" id="search-img">
            <img onClick={this.handleClick} src="images/search-icon.png" />
          </div>
            {this.props.searchVisible ? <SearchBox
              handleSearch={this.props.handleSearch}
              value={this.props.value} /> : null
            }
        </div>
        <div className="row" id="products-page" >
          { products }
        </div>
      </div>
    );
  }
};

export default ProductsList;
