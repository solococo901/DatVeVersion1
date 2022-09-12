import React, { Component } from 'react';
import { connect } from 'react-redux';

class Computer extends Component {
    render() {

        let keyFrame = `@keyframes randomItem${Date.now()} {
            0% {top:-50px ; left : 5px}
            25% {top:50px; left : 5px}
            50% {top:-100px; left : 5px}
            75% {top:-100; left : 5px}
            100% {top:0; left : 5px }

        }`
        return (
            <div className='text-center chinhSua'>
                <style>{keyFrame}</style>

                <div className='theThink' style={{ position: 'relative' }}>
                    <img src={this.props.comIcon.hinhAnh} alt={this.props.comIcon.hinhAnh} style={{
                        width: '75px',
                        height: '75px',
                        transform: 'rotate(270deg)',
                        left: '5px',
                        position: 'absolute',
                        animation: `randomItem${Date.now()} 0.5s `,

                    }}></img>
                </div>
                <div className='speech-bubble'></div>
                <img src='./img/GameOanTuXi/playerComputer.png' alt='./img/GameOanTuXi/playerComputer.png' style={{ width: '175px', height: '175px' }} ></img>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comIcon: state.BaiTapOanTuXiRedeucer.computer
    }
}

export default connect(mapStateToProps)(Computer)
