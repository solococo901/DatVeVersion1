import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { prodsItem } = this.props;
        return (
            <div classname="card text-left">
                <img classname="card-img-top" src={prodsItem.hinhAnh} alt={prodsItem.hinhAnh} width="80%" />
                <div classname="card-body">
                    <h4 classname="text-center">{prodsItem.tenSP}</h4>
                    <p classname="card-text text-center">{prodsItem.giaBan.toLocaleString()} vnđ</p>
                    <button type="button" class="btn btn-primary" onClick={() => { this.props.themGioHang(prodsItem) }}>Thêm Giỏ Hàng</button>

                </div>
            </div>

        )
    }
}
