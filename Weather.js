import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: 'weather-hazy',
    color: ['#FF0080', '#FF8C00'],
    title: 'Haze',
    subTitle: '╰(*°▽°*)╯',
  },
  Clear: {
    iconName: 'weather-sunny',
    color: ['#f12711', '#f5af19'],
    title: 'Clear',
    subTitle: '╰(*°▽°*)╯',
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    color: ['#CAC531', '#F3F9A7'],
    title: 'Thunderstorm',
    subTitle: '╰(*°▽°*)╯',
  },
  Drizzle: {
    iconName: 'weather-partly-rainy',
    color: ['#2193b0', '#6dd5ed'],
    title: 'Drizzle',
    subTitle: '╰(*°▽°*)╯',
  },
  Rain: {
    iconName: 'weather-rainy',
    color: ['#3f2b96', '#a8c0ff'],
    title: 'Rain',
    subTitle: '╰(*°▽°*)╯',
  },
  Snow: {
    iconName: 'weather-snowy',
    color: ['#ACB6E5', '#74ebd5'],
    title: 'Snow',
    subTitle: '╰(*°▽°*)╯',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    color: ['#6190E8', '#A7BFE8'],
    title: 'Clouds',
    subTitle: '╰(*°▽°*)╯',
  },
};

const Weather = ({ temp, condition }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].color}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            style={{ color: '#ffffff' }}
            size={96}
            name={weatherOptions[condition].iconName}
          />
          <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subTitle}>
            {weatherOptions[condition].subTitle}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Clear',
    'Clouds',
    'Haze',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  temp: {
    fontSize: 42,
    color: '#ffffff',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    coclor: '#ffffff',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 20,
  },
  subTitle: {
    coclor: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  textContainer: {
    paddingHorizontal: 40,
  },
});

export default Weather;
