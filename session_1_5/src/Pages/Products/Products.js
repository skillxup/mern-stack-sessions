import React, { Component } from 'react';
import Product from './Product';
import './Products.css';

class Products extends Component {
  state = {
    products: [
      { productId: 1, productName: 'dell', productRating: '3 star' }, 
      { productId: 4, productName: 'acer', productRating: '3.5 star' }, 
      { productId: 2, productName: 'samsung', productRating: '2.5 star' }, 
      { productId: 3, productName: 'hp', productRating: '4 star' } 
    ], 
    show: true
  };

  toggleEffect = () => {
    let doesShow = this.state.show;
    this.setState({
      show: !doesShow
    });
  };

  updateRecords = () => {
    this.setState({
      products: [
        { productId: 11, productName: 'de_ll', productRating: '1 star' }, 
        { productId: 14, productName: 'ac_er', productRating: '1.5 star' }, 
        { productId: 32, productName: 'sam_sung', productRating: '5 star' }, 
        { productId: 43, productName: 'h_p', productRating: '3 star' } 
      ]
    })
  };

  updateRecordsPassParameters = (productId, productName, productRating) => {
    this.setState({
      products: [
        { productId: 11, productName: 'de_ll', productRating: '1 star' }, 
        { productId: productId, productName: productName, productRating: productRating }, 
        { productId: 32, productName: 'sam_sung', productRating: '5 star' }, 
        { productId: 43, productName: 'h_p', productRating: '3 star' } 
      ]
    })
  };

  updateProductName = (event) => {
    this.setState({
      products: [
        { productId: 11, productName: 'de_ll', productRating: '1 star' }, 
        { productId: 14, productName: event.target.value, productRating: '1.5 star' }, 
        { productId: 32, productName: 'sam_sung', productRating: '5 star' }, 
        { productId: 43, productName: 'h_p', productRating: '3 star' } 
      ]
    })
  };

  render() {
    let products = null;

    if(this.state.show) {
      products = (<div className='row'>
        {this.state.products.map((product, index) => {
          return(<Product productId = {product.productId} productName = {product.productName} productRating = {product.productRating} updateRecords = {this.updateRecords} updateRecordsPassParameters = {() => {this.updateRecordsPassParameters(65, 'qwe_rty', '3 star')}} updateProductName = {this.updateProductName} />)
        })}
    </div>);
    } else {
      products = (<div>
        <p>no products found!</p>
      </div>);
    }

    return(
      <div className='row'>
        <div className='col-sm-12'>

          <button type='button' className='btn btn-primary mt-3 mb-3 me-3' onClick={this.toggleEffect}> toggle effect </button>

          <button type='button' className='btn btn-primary mt-3 mb-3 me-3' onClick={this.updateRecords}> update records </button>

          <button type='button' className='btn btn-primary mt-3 mb-3 me-3' onClick={this.updateRecordsPassParameters.bind(this, 43, 'sansui', '2.5 star')}> update records with passing parameters </button>

          {products}
        </div>
      </div>
    )
  }
}

export default Products;