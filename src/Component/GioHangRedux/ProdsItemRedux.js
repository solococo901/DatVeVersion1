import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProdsItemRedux extends Component {

    render() {

        let { prods } = this.props;

        return (
            <div classname="card text-left">
                <img classname="card-img-top" src={prods.hinhAnh} alt={prods.hinhAnh} width="80%" />
                <div classname="card-body">
                    <h4 classname="text-center">{prods.tenSP}</h4>
                    <p classname="card-text text-center">{prods.giaBan.toLocaleString()} vnđ</p>
                    <button type="button" class="btn btn-primary" onClick={() => { this.props.themGioHang(prods) }}>Thêm Giỏ Hàng</button>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            let spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                soLuong: 1,
                giaBan: sanPham.giaBan,
                hinhAnh: sanPham.hinhAnh,

            };
            let action = {
                type: "THEM_GIO_HANG",
                spGioHang
            };
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ProdsItemRedux);