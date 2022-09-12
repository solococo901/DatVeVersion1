import React, { Component } from 'react'

export default class CartModal extends Component {



    renderCart = () => {
        let { gioHang, xoaGioHang } = this.props;
        return gioHang.map((gioHang, index) => {
            return <tr key={index}>
                <td>{gioHang.maSP}</td>
                <td><img style={{ width: 50 }} src={gioHang.hinhAnh} alt={gioHang.hinhAnh}></img></td>
                <td>{gioHang.tenSP}</td>
                <td>
                    <button className='btn btn-success' onClick={() => { this.props.tangGiamSoLuong(gioHang.maSP, 1) }}>+</button>
                    {gioHang.soLuong}
                    <button className='btn btn-success' onClick={() => { this.props.tangGiamSoLuong(gioHang.maSP, -1) }}>-</button>

                </td>
                <td>{gioHang.donGia.toLocaleString()}</td>
                <td>{(gioHang.soLuong * gioHang.donGia).toLocaleString()}</td>
                <td><button className='btn btn-danger' onClick={() => { xoaGioHang(gioHang.maSP) }}>Xóa</button></td>

            </tr>
        })
    }


    tinhTongTien = () => {
        let { gioHang } = this.props;
        return gioHang.reduce((tongTien, gioHang, index) => {
            return tongTien += gioHang.soLuong * gioHang.donGia
        }, 0).toLocaleString();
    }

    render() {
        let { gioHang } = this.props;
        console.log(this.props.gioHang);
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
                                    {this.renderCart()}
                                </tbody>
                                <tfoot>
                                    <td colSpan='5'>

                                    </td>
                                    <td>Tổng Tiền</td>
                                    <td>{this.tinhTongTien()}</td>
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
