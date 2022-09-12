import React, { Component } from 'react';
import dataColorCar from '../Data/Data.json';





export default class Home extends Component {



    state = {
        carDatacurrent: {
            "id": 1,
            "name": "textla 1",
            "url": "https://react-car-configurator.netlify.app/cars/model_s/model_s_black_wheel_1.png"
        },
        count: 1

    }


    renderColor = () => {
        return dataColorCar.map((dataItem, index) => {
            return <img onClick={() => { this.changeColorCar(dataItem) }} src={dataItem.url} className="" alt="..." key={index} style={{ width: "200px", height: "200px", cursor: "pointer" }} />
        })
    }

    changeColorCar = (newColorCar) => {
        this.setState({
            carDatacurrent: newColorCar
        })
    }





    render() {
        return (
            <div className="card container" >
                <img src={this.state.carDatacurrent.url} className="card-img-top container" alt="..." style={{ width: "50%" }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{this.state.carDatacurrent.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.renderColor()}
                    </div>
                </div>
            </div>
        )
    }
}
