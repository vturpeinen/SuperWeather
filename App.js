import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import CityInput from './CityInput';

export default class App extends React.Component {
  state = {
    temperature: 0,
    weatherCondition: null,
  };

  componentDidMount() {
       //this.fetchWeather();
      }
    
  fetchWeather(city, API_KEY = '1c3d54150471778fc70e82e2eb5a64f4') {
console.log(city)
    fetch(  `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main, 
        });
        console.log(temperature)
      });
  }
  render() {
    const {  weatherCondition, temperature, city } = this.state;
    return (
      <View style={styles.container}>
        <CityInput onCityEntry={()=> this.fetchWeather()}/>
        
          <View style={styles  .loadingContainer}>
            <Text>{city}</Text>
            <Text>{temperature}</Text>
            <Text>{weatherCondition}</Text>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});