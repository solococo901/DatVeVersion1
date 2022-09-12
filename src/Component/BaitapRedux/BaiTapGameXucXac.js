import React, { Component } from 'react';
import './BaiTapGameXucXac.css'
import ThongTinTroChoi from './ThongTinTroChoi';
import XucXac from './XucXac';
import { connect } from 'react-redux';

class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className='game' >
                <div className='title-game text-center mt-5 display-4'>
                    Bài Tập Game Xúc Xắc
                </div>
                <div className='row text-center mt-3'>
                    <div className='col-4'>
                        <button className='btnGame' onClick={() => { this.props.chonTaiXiu(true) }}>Tài</button>
                    </div>
                    <div className='col-4'>
                        <XucXac />
                    </div>
                    <div className='col-4'>
                        <button className='btnGame' onClick={() => { this.props.chonTaiXiu(false) }}>Xỉu</button>
                    </div>

                </div>
                <div className='thongTinTroChoi text-center mt-3'>
                    <ThongTinTroChoi />
                    <button className='btn btn-success p-2 display-4' onClick={() => { this.props.playGame() }}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chonTaiXiu: (giaTri) => {
            let action = {
                type: 'CHON_TAI_XIU',
                giaTri
            };
            dispatch(action);
        },
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac)