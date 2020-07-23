import React, { Component } from 'react';
// import Products from '../shopify/products/Products';
import Collections from '../shopify/collections/Collections';
import { connect } from 'react-redux';
import store from '../../store/Store';

class Merchandise extends Component {

  render() {
    const state = store.getState();

    return (
      <div 
        className='merchandise' 
        style={{
          display: 'flex', 
          justifyContent: 'center',
          width: '100%',
          heigth: '100%'
        }}
      >
        {/* <Products 
          products={ state.products }
          client={ state.client }
          addVariantToCart={ this.props.addVariantToCart }
        /> */}

        <Collections 
          collections={ state.collections }
          client={ state.client }
          addVariantToCart={ this.props.addVariantToCart }
        />
      </div>
    )
  }
}

export default connect((state) => state)(Merchandise);