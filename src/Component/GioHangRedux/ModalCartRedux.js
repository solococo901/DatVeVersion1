import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalCartRedux extends Component {



    tongTienGioHang = () => {
        this.props.gioHang.reduce((tongTien, spGioHang, index) => {
            return tongTien += spGioHang.soLuong * spGioHang.giaBan
        }, 0)
    }

    render() {
        return (

            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" style={{ minWidth: 1000 }} role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ Hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Mã SP</th>
                                        <th>Hình Ảnh</th>
                                        <th>Tên SP</th>
                                        <th>Số Lượng</th>
                                        <th>Đơn Giá</th>
                                        <th>Thành Tiền</th>
                                        <th>Chức Năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.gioHang.map((spGH, index) => {
                                        return <tr key={index}>
                                            <td>{spGH.maSP}</td>
                                            <td><img style={{ width: '50px' }} src={spGH.hinhAnh} alt={spGH.hinhAnh} /></td>
                                            <td>{spGH.tenSP}</td>
                                            <td>
                                                <button className='btn btn-success' onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, 1) }}>+</button>
                                                {spGH.soLuong}
                                                <button className='btn btn-success' onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, -1) }}>-</button>

                                            </td>
                                            <td>{spGH.giaBan.toLocaleString()}</td>
                                            <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                                            <td><button className='btn btn-danger' onClick={() => { this.props.xoaSanPham(spGH.maSP) }}>Xóa</button></td>

                                        </tr>
                                    })}
                                </tbody>
                                <tfoot>
                                    <td colSpan='5'>

                                    </td>
                                    <td>Tổng Tiền</td>
                                    <td>{(this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                        return tongTien += spGioHang.soLuong * spGioHang.giaBan
                                    }, 0)).toLocaleString()}</td>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaSanPham: (maSP) => {
            let action = {
                type: "XOA_SAN_PHAM",
                maSP
            };
            dispatch(action);
        },
        tangGiamSoLuong: (maSP, number) => {
            let action = {
                type: "TANG_GIAM_SO_LUONG",
                maSP,
                number
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCartRedux);