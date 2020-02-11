import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';
const API_KEY = '31ce4e02ae903f138bd547365f90520e';

export default class extends React.Component{
  state={
    isLoading : true,
    latitude : null,
    longitude : null,
    locationname : null,
    temp : null,
  }

  getWeather = async(lat, lng) =>{
   const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);
   this.setState({locationname: data.name});
   this.setState({temp: data.main.temp});
   //console.log(this.state.weather);
  }
  
  getLocation = async () =>{
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({latitude, longitude});
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find your position. Please ", "So Sad");
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, latitude, longitude, locationname, temp} = this.state;
    return (
      isLoading 
      ? <Loading/> 
      : <Weather  
        locationname = {locationname}
        temp = {temp}
    />
    );
  }
}

