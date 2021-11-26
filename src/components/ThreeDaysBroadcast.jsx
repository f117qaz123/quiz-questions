import React from "react";

const ThreeDaysBroadcast = ({ weather }) => {

  const threeDaysWeatherList = weather.forecast.forecastday.map((day, index) => {
      return (
        <div key={index} >
          <div className="item">
            <img src={day.day.condition.icon} alt={day.day.condition.text}/>
            <div className="content">
              <div className="header">
                <h2 className="ui header">{day.date}</h2>
                Average Temp: {day.day.avgtemp_c} &#8451;
              </div>
              <div className="description">Min Temp: {day.day.mintemp_c} &#8451; Max Temp: {day.day.maxtemp_c} &#8451;</div>
            </div>
          </div>
        </div>
      );
    }
  );


  return (
    <div className="ui items">
      {threeDaysWeatherList}
    </div>
  );
};

export default ThreeDaysBroadcast;
