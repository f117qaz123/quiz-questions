import React from "react";
import SearchBar from "./SearchBar";
import useWeather from "../hooks/useWeather";
import CurrentWeather from "./CurrentWeather";
import ThreeDaysBroadcast from "./ThreeDaysBroadcast";

const App = () => {
  const [weather, getWeather] = useWeather('Toronto');

  return weather ? (
    <>
      <h1 className="ui center aligned header">
        Weather App
      </h1>
      <SearchBar onFormSubmit={getWeather}/>
      <div className="ui grid">
        <div className="nine wide column">
          <h2 className="ui header">
            Current:
          </h2>
          <CurrentWeather weather={weather}/>
        </div>
        <div className="seven wide column">
          <h2 className="ui header">
            Three days Forecast:
          </h2>
          <ThreeDaysBroadcast weather={weather}/>
        </div>
      </div>
    </>
  ) : null
};

export default App;
