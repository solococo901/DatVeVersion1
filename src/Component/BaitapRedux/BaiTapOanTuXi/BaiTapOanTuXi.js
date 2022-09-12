import React, { Component } from 'react';
import './BaiTapOanTuXi.css';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import Player from './Player';
import { connect } from 'react-redux';

class BaiTapOanTuXi extends Component {
    render() {


        return (
            <div className='gameOanTuXi'>

                <div className='row text-center mt-5'>
                    <div className='col-4'>
                        <Player />
                    </div>
                    <div className='col-4 text-center mt-3'>
                        <KetQuaTroChoi />
                        <button className='btn btn-success' onClick={() => { this.props.playGame() }}>PLAY GAME</button>
                    </div>
                    <div className='col-4'>
                        <Computer />
                    </div>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let randomComItem = setInterval(() => {
                dispatch({
                    type: 'PLAY_GAME_OTX'
                })
                count++;
                if (count > 20) {
                    clearInterval(randomComItem);

                    dispatch({
                        type: 'END_GAME'
                    })
                }
            }, 100)


        }
    }
}


export default connect(null, mapDispatchToProps)(BaiTapOanTuXi)