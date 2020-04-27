import React, { Component } from 'react';
import './Products.css';
import Product from '../product/Product';

class Products extends Component {
  
  render() {
    let products;
    if (this.props.products) {
      products = this.props.products.map((product) => {
        return (
          <Product
            addVariantToCart={ this.props.addVariantToCart }
            client={ this.props.client } 
            key={ product.id.toString() }
            product={ product }
          />
        );
      });
    } else {
      products = <p>Loading...</p>
    }
    products.reverse(); 
    return (
      <div className='productWrapper' >
        { products } 
      </div>
    );
  }
}

export default Products;