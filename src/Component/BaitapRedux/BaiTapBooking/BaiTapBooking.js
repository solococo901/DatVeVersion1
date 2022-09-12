import React, { Component, Fragment } from 'react';
import './BaiTapBooking.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../../Data/danhSachGhe.json';
import HangGhe from './HangGhe';

export default class BaiTapBooking extends Component {


    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }
    render() {
        return (
            <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url("./img/bookingTitkets/bgmovie.jpg")' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className='container-fluid'>
                        <div className='row '>
                            <div className='col-8 mt-3 text-center'>
                                <div className='text-warning display-4 '>BÀI TẬP ĐẶT VÉ</div>
                                <div className='mt-1 text-light'>MÀN HÌNH</div>
                                <div className='mt-2' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div className='screen'></div>

                                </div>{this.renderHangGhe()}
                            </div>
                            <div className='col-4 '>
                                <div style={{ fontSize: '25px' }} className='text-light mt-3 '>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
