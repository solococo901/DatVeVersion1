import React, { Component } from 'react'
import Modal from './Modal';

export default class ProductsItem extends Component {




    render() {

        let { item } = this.props
        return (

            <div className="card text-left">
                <img className="card-img-top" src={item.img} alt={item.img} />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.price}</p>
                    <button onClick={() => { this.props.xemChiTiet(item) }} type="button" class="btn btn-primary" data-toggle="modal" data-target="#modelId">Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
