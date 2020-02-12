import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import PropTypes from "prop-types";

import cloud from "./weatherImg/cloud.png";
import dark from "./weatherImg/dark.png";
import drizzle from "./weatherImg/drizzle.png";
import dust from "./weatherImg/dust.png";
import fog from "./weatherImg/fog.png";
import rain from "./weatherImg/rain.png";
import smoke from "./weatherImg/smoke.png";
import snow from "./weatherImg/snow.png";
import squall from "./weatherImg/squall.png";
import sunny from "./weatherImg/sunny.png";
import thunderstorm from "./weatherImg/thunderstorm.png";
import tornado from "./weatherImg/tornado.png";

import clearbg from "./backrounImg/clearbg.jpg";
import cloudbg from "./backrounImg/cloudbg.jpg";
import defaultImg from "./backrounImg/defaultImg.jpg";
import drizzlebg from "./backrounImg/drizzlebg.jpg";
import dustbg from "./backrounImg/dustbg.jpg";
import mistbg from "./backrounImg/mistbg.jpg";
import rainybg from "./backrounImg/rainybg.jpg";
import smokebg from "./backrounImg/smokebg.jpg";
import snowybg from "./backrounImg/snowybg.jpg";
import squallbg from "./backrounImg/squallbg.jpg";
import thunderstormbg from "./backrounImg/thunderstormbg.jpg";
import tornadobg from "./backrounImg/tornadobg.jpg";

function weatherDiv(description) {
  try {
    if (description.match("rain") != null) return rain;
    else if (description.match("snow") != null) return snow;
    else if (description.match("clear") != null) return sunny;
    else if (description.match("thunder") != null) return thunderstorm;
    else if (description.match("drizzle") != null) return drizzle;
    else if (
      description.match("mist") ||
      description.match("fog") ||
      description.match("haze") != null
    )
      return fog;
    else if (description.match("smoke") != null) return smoke;
    else if (description.match("dust") || description.match("sand") != null)
      return dust;
    else if (description.match("squall") != null) return squall;
    else if (description.match("tornado") != null) return tornado;
    else if (description.match("cloud") != null) return cloud;
    else return dark;
  } catch (error) {
    console.log(error);
  }
  return dark;
}
function bgImg(description) {
  try {
    if (description === rain) return rainybg;
    else if (description === snow) return snowybg;
    else if (description === clear) return clearbg;
    else if (description === thunderstorm) return thunderstormbg;
    else if (description === drizzle) return drizzlebg;
    else if (description === fog) return mistbg;
    else if (description === smoke) return smokebg;
    else if (description === dust) return dustbg;
    else if (description === squall) return squallbg;
    else if (description === tornado) return tornadobg;
    else if (description === cloud) return cloudbg;
    else return defaultImg;
  } catch (error) {
    console.log(error);
  }
}

function Weather({ locationname, temp, description }) {
  const WeatherImg = weatherDiv(description);
  const bg = bgImg(WeatherImg);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={bg}></ImageBackground>
      <Image style={{ width: 50, height: 50 }} source={WeatherImg} />
      <Text style={styles.defaulttext}>city: {locationname}</Text>
      <Text style={styles.defaulttext}>temp: {temp}</Text>
      <Text style={styles.defaulttext}>weather: {description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#c2f2f2",
    padding: 20
  },
  defaulttext: {
    color: "#2c2c2c",
    fontSize: 30
  }
});

export default Weather;
