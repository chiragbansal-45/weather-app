import React,{Component} from 'react';
import {Media} from 'reactstrap';

const WeatherInfo =(props) => {
    
        return(
            
            <div className="flex-container">
                <div className="inside-container">
                <div>
                    <Media object src={`assets/images/${props.data.description}.svg`} className="image" alt="image name" />

                </div>
                <div className="data">
                    <div className="margin"><h2>{props.data.temprature} °C</h2></div>
                    <div className="margin"><h5> {props.data.description} </h5></div>
                    <div className="margin"><h5> {new Date().toLocaleDateString()}</h5></div>
                </div>

                </div>
                


            </div>
            
        )
    }

export default WeatherInfo;