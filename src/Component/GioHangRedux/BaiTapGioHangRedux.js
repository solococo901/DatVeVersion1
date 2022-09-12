import React, { Component } from 'react'
import ModalCartRedux from './ModalCartRedux'
import ProdsListRedux from './ProdsListRedux'
import { connect } from 'react-redux'

class BaiTapGioHangRedux extends Component {

    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSL, spGH, index) => {
            return tongSL += spGH.soLuong;
        }, 0)
    }
    render() {


        return (
            <div className='container'>
                <h3 className='text-center'>Danh Sách Sản Phẩm</h3>
                <div className='text-right' data-target="#modelId" data-toggle="modal" >
                    <i class="fa fa-cart-arrow-down" style={{ cursor: 'pointer' }}>({this.renderSoLuong()}) Giỏ Hàng</i>
                </div>
                <ModalCartRedux />
                <ProdsListRedux />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}


export default connect(mapStateToProps, null)(BaiTapGioHangRedux)