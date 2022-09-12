import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThongTinTroChoi extends Component {


    render() {

        console.log(this.props.thongTin);
        return (
            <div>
                <div className='display-4'>
                    BẠN CHỌN :<span className='text-danger'> {this.props.taiXiu ? 'TÀI' : 'XỈU'}</span>
                </div>
                <div className='display-4'>
                    BÀN THẮNG :<span className='text-success'> {this.props.banThang}</span>
                </div>
                <div className='display-4'>
                    SỐ BÀN CHƠI :<span className='text-success'> {this.props.banChoi}</span>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        banThang: state.xucXacRedeucer.soBanThang,
        banChoi: state.xucXacRedeucer.tongSoBanChoi,
        taiXiu: state.xucXacRedeucer.taiXiu
    }
}

export default connect(mapStateToProps)(ThongTinTroChoi)
