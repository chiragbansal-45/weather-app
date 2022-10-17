import React from "react";
import { Media } from "reactstrap";

const WeatherInfo = (props) => {
  return (
    <div className="flex-container">
      <div className="inside-container">
        <div>
          <Media
            object
            src={
              props.data.description && props.data.description != ""
                ? `assets/images/${props.data.description}.svg`
                : `assets/images/Clear.svg`
            }
            className="image"
            alt="image name"
          />
        </div>
        <div className="data">
          <div className="margin">
            <h2>{props.data.temprature ? props.data.temprature : 0} °C</h2>
          </div>
          <div className="margin">
            <h5> {props.data.description} </h5>
          </div>
          <div className="margin">
            <h5> {new Date().toLocaleDateString()}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
