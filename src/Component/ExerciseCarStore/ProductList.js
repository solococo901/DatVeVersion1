import React, { Component } from 'react';
import ProductsItem from './ProductsItem';

export default class ProductList extends Component {


    renderProductItem = () => {
        return this.props.productsData.map((product, index) => {
            return <div className='col-3' key={index}>
                <ProductsItem item={product} xemChiTiet={this.props.xemChiTiet} />
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderProductItem()}
                </div>
            </div>
        )
    }
}
