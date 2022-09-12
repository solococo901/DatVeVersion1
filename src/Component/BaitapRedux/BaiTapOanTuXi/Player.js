import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
    renderKeoBuaBao = () => {
        return this.props.iconKeoBuaBao.map((icons, index) => {
            let border = {};
            if (icons.datCuoc === true) {
                border = { border: '3px solid yellow' };
            }
            return <div className='col-4' key={index}>
                <button style={border} className='btnItem' onClick={() => { this.props.chonIcon(icons.ma) }}>
                    <img src={icons.hinhAnh} alt={icons.hinhAnh} style={{ width: '35px', height: '35px' }}></img>
                </button>

            </div>
        })
    }
    render() {
        return (
            <div className='text-center chinhSua'>
                <div className='theThink'>

                    <img src={this.props.iconKeoBuaBao.find(item => item.datCuoc === true).hinhAnh} alt={this.props.iconKeoBuaBao.find(item => item.datCuoc === true).hinhAnh} style={{ width: '75px', height: '75px' }} ></img>
                </div>
                <div className='speech-bubble'></div>
                <img src='./img/GameOanTuXi/player.png' alt='./img/GameOanTuXi/player.png' style={{ width: '175px', height: '175px' }} ></img>
                <div className='row'>
                    {this.renderKeoBuaBao()}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        iconKeoBuaBao: state.BaiTapOanTuXiRedeucer.mangDatCuoc
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        chonIcon: (iCon) => {
            let action = {
                type: 'CHON_ICON_CUOC',
                iCon
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
