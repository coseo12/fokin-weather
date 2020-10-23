import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '5ca0d43aa0aa947114aa0730b3b46959';
const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

const App = () => {
  const [weathder, setWeather] = useState({
    loading: true,
    temp: null,
    condition: null,
  });

  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `${URL}&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    setWeather({
      loading: false,
      temp: temp,
      condition: weather[0].main,
    });
  };

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert(`Can't find you.`, `So sad.`);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {weathder.loading ? (
        <Loading />
      ) : (
        <Weather temp={weathder.temp} condition={weathder.condition} />
      )}
    </>
  );
};

export default App;
