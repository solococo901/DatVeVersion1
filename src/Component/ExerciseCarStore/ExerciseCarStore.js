import React, { Component } from 'react'
import Modal from './Modal.js'
import ProductList from './ProductList.js'

export default class ExerciseCarStore extends Component {

    state = {
        productDetail: { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 }
    }

    products = [
        { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }

    ]

    xemChiTiet = (newProds) => {
        this.setState({
            productDetail: newProds
        })
    }

    render() {
        return (
            <div>

                <ProductList productsData={this.products} xemChiTiet={this.xemChiTiet} />
                <Modal content={this.state} />
            </div>
        )
    }
}
