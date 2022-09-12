import React, { Component } from 'react';
import { connect } from 'react-redux';

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div >
                <div className='display-4 text-warning' style={{ fontSize: '45px' }}>{this.props.ketQua}</div>
                <div className='display-4 text-success' style={{ fontSize: '45px' }}>SỐ BÀN THẮNG : <span className='text-warning'>{this.props.soBanThang}</span></div>
                <div className='display-4 text-success' style={{ fontSize: '45px' }}>SỐ MÀN THUA : <span className='text-warning'>{this.props.soBanThua}</span></div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.BaiTapOanTuXiRedeucer.ketQua,
        soBanThang: state.BaiTapOanTuXiRedeucer.soBanThang,
        soBanThua: state.BaiTapOanTuXiRedeucer.soBanThua

    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)
