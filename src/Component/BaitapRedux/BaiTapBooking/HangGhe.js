import React, { Component } from 'react';
import { connect } from 'react-redux';
import { datGheAction } from '../../Redux/Action/BaiTapBookingActions';


class HangGhe extends Component {
    renderSoGhe = () => {
        let cssGheChon = '';

        return this.props.hangGhe.danhSachGhe.map((item, index) => {
            if (item.daDat) {
                cssGheChon = 'gheDuocChon';
            }

            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === item.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon';

            }
            return <button onClick={() => { this.props.datGhe(item) }}
                className={`ghe ${cssGheChon} ${cssGheDangDat}`
                } key={index} >
                {item.soGhe}
            </button >

        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button key={index} className='rowNumber'>
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-4'>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang} {this.renderSoGhe()}
            </div>
        }

    }
    render() {
        return (
            <div className='text-light text-left ml-5 mt-0' style={{ fontSize: '30px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.DatVeRedeucer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)