import React from "react";

const CurrentWeather = ({weather}) => {
  return (
    <h3 className="ui header">
      <img src={weather.current.condition?.icon} alt={weather.current.condition.text} />
      <div className="content">
        {weather.current.temp_c} &#8451;
        <div className="sub header">Feels Like: {weather.current.feelslike_c} &#8451;</div>
      </div>
    </h3>
  );
};

export default CurrentWeather;
