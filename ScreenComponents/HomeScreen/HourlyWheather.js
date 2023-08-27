import moment from 'moment';
import React, { Fragment } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

const HourlyWheather = () => {

  return (
    <Fragment>
      <View style={{  }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
          {data?.map((value, index) => (
            <View key={index} style={{ padding: 10, alignItems: 'center', justifyContent: 'center', margin: 5 }}>
              <Image source={{ uri: `https://developer.accuweather.com/sites/default/files/01-s.png` }} resizeMode={'contain'} style={{ width: 60, height: 60 }} />
              <Text style={{ color: "#252323", fontSize: 18, fontFamily: 'OpenSans-Bold' }}>30&deg;</Text>
              <Text style={{ color: "#252323", fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>Hazy sunshine</Text>
              <View style={{ justifyContent: "flex-start", }}>
                {index === 0 ?
                  <Text style={{ color: "#252323", fontSize: 18, fontFamily: 'OpenSans-Bold' }}>Now</Text>
                  :
                  <Text style={{ color: "#252323", fontSize: 18, fontFamily: 'OpenSans-Bold' }}>{new Date(value?.DateTime).getHours()}:00</Text>
                }
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Fragment>
  )
}

export default HourlyWheather;

const data = [
  {
    "DateTime": "2023-03-20T17:00:00+05:30",
    "EpochDateTime": 1679311800,
    "WeatherIcon": 5,
    "IconPhrase": "Hazy sunshine",
    "HasPrecipitation": false,
    "IsDaylight": true,
    "Temperature": {
      "Value": 84.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=17&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=17&lang=en-us"
  },
  {
    "DateTime": "2023-03-20T18:00:00+05:30",
    "EpochDateTime": 1679315400,
    "WeatherIcon": 5,
    "IconPhrase": "Hazy sunshine",
    "HasPrecipitation": false,
    "IsDaylight": true,
    "Temperature": {
      "Value": 81.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=18&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=18&lang=en-us"
  },
  {
    "DateTime": "2023-03-20T19:00:00+05:30",
    "EpochDateTime": 1679319000,
    "WeatherIcon": 34,
    "IconPhrase": "Mostly clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 78.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=19&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=19&lang=en-us"
  },
  {
    "DateTime": "2023-03-20T20:00:00+05:30",
    "EpochDateTime": 1679322600,
    "WeatherIcon": 34,
    "IconPhrase": "Mostly clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 76.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=20&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=20&lang=en-us"
  },
  {
    "DateTime": "2023-03-20T21:00:00+05:30",
    "EpochDateTime": 1679326200,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 74.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=21&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=21&lang=en-us"
  },
  {
    "DateTime": "2023-03-20T22:00:00+05:30",
    "EpochDateTime": 1679329800,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 73.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=22&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=22&lang=en-us"
  },
  {
    "DateTime": "2023-03-20T23:00:00+05:30",
    "EpochDateTime": 1679333400,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 72.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=23&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=1&hbhhour=23&lang=en-us"
  },
  {
    "DateTime": "2023-03-21T00:00:00+05:30",
    "EpochDateTime": 1679337000,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 71.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=0&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=0&lang=en-us"
  },
  {
    "DateTime": "2023-03-21T01:00:00+05:30",
    "EpochDateTime": 1679340600,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 71.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=1&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=1&lang=en-us"
  },
  {
    "DateTime": "2023-03-21T02:00:00+05:30",
    "EpochDateTime": 1679344200,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 72.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=2&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=2&lang=en-us"
  },
  {
    "DateTime": "2023-03-21T03:00:00+05:30",
    "EpochDateTime": 1679347800,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 71.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=3&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=3&lang=en-us"
  },
  {
    "DateTime": "2023-03-21T04:00:00+05:30",
    "EpochDateTime": 1679351400,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 71.0,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=4&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/hourly-weather-forecast/189318?day=2&hbhhour=4&lang=en-us"
  }
]