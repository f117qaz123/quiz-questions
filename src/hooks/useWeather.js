import { useEffect, useState } from 'react';
import WeatherAPI from "../api/WeatherAPI";

const useWeather = (defaultSearchTerm) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    getWeather(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const getWeather = async (term) => {
    const {data} = await WeatherAPI.get('/forecast.json', {
      params: {q: term, days: '3'},
    });

    setWeather(data);
  };

  return [weather, getWeather];
};

export default useWeather;
