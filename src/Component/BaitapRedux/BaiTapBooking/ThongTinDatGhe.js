import React, { Component } from 'react';
import { connect } from 'react-redux';
import { huyGheAction, xacNhanDatGhe } from '../../Redux/Action/BaiTapBookingActions';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button><span className='text-light' style={{ fontSize: '30px' }}> Ghế Đã Đặt</span><br />
                    <button className='gheDangChon'></button><span className='text-light' style={{ fontSize: '30px' }}> Ghế Đang Đặt</span><br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button><span className='text-light' style={{ fontSize: '30px' }}> Ghế Chưa Đặt</span>
                </div>
                <div className='mt-5'>
                    <table class="table" border="2">
                        <thead>
                            <tr className='text-light' style={{ fontSize: '15px' }}>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                    return <tr className='text-light' style={{ fontSize: '15px' }} key={index}>
                                        <th>{gheDangDat.soGhe}</th>
                                        <th>{gheDangDat.gia}</th>
                                        <th><button className='btn btn-danger' onClick={() => { this.props.xoaGhe(gheDangDat) }}>Xóa</button></th>
                                    </tr>
                                })

                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td className='text-light'>Tổng Tiền</td>
                                <td className='text-warning'>
                                    {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                        return tongTien += gheDangDat.gia;
                                    }, 0).toLocaleString()
                                    } đ
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='3'>
                                    <button className='btn btn-success' onClick={() => { this.props.xacNhan(this.props.danhSachGheDangDat) }} style={{ marginLeft: '40%' }}>Đặt Vé</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGhe: (ghe) => {
            dispatch(huyGheAction(ghe))
        },
        xacNhan: (ghe) => {
            dispatch(xacNhanDatGhe(ghe))
        }

    }
}


const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.DatVeRedeucer.danhSachGheDangDat
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe)