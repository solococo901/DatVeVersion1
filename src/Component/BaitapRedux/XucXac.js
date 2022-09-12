import React, { Component } from 'react';
import { connect } from 'react-redux'

class XucXac extends Component {
    renderXucXac = () => {

        return this.props.mangXucXac.map((xucXac, index) => {
            return <img key={index} src={xucXac.hinhAnh} alt={xucXac.hinhAnh} className='' style={{ width: '70px', height: '70px' }}></img>
        })
    }
    render() {
        return (
            <div >
                {this.renderXucXac()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangXucXac: state.xucXacRedeucer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac)
