import React, { Fragment } from 'react'
import { View, Text, Image } from 'react-native'

const FiveDaysWheather = () => {

  var list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <Fragment>
      <View style={{ paddingHorizontal: 15, paddingTop: 40 }}>
        {data?.DailyForecasts?.map((value, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ color: '#252323', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>{new Date(value?.Date)?.getMonth()}/{new Date(value?.Date)?.getDate()}</Text>
            <Text style={{ color: 'gray', fontFamily: 'OpenSans-Bold', fontSize: 14, width: 85, }}>
              {index === 0 ?
                'Today'
                :
                index === 1 ?
                  'Tomorrow'
                  :
                  list[new Date(value?.Date)?.getDay()]
              }
            </Text>
            <Image source={{ uri: `https://developer.accuweather.com/sites/default/files/01-s.png` }} resizeMode={'contain'} style={{ width: 60, height: 60 }} />
            <Text style={{ color: 'gray', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>{value?.Temperature?.Minimum?.Value?.toFixed(0)}</Text>
            <Text style={{ color: '#252323', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>{value?.Temperature?.Maximum?.Value?.toFixed(0)}</Text>
          </View>
        ))}
      </View>
    </Fragment>
  )
}

export default FiveDaysWheather;

const data = {
  "Headline": {
    "EffectiveDate": "2023-03-22T19:00:00+05:30",
    "EffectiveEpochDate": 1679491800,
    "Severity": 7,
    "Text": "Cool Wednesday night",
    "Category": "cold",
    "EndDate": "2023-03-23T07:00:00+05:30",
    "EndEpochDate": 1679535000,
    "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2023-03-20T07:00:00+05:30",
      "EpochDate": 1679275800,
      "Temperature": {
        "Minimum": {
          "Value": 20.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 32.0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 5,
        "IconPhrase": "Hazy sunshine",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=1&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=1&unit=c&lang=en-us"
    },
    {
      "Date": "2023-03-21T07:00:00+05:30",
      "EpochDate": 1679362200,
      "Temperature": {
        "Minimum": {
          "Value": 18.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 32.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 6,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Partly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=2&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=2&unit=c&lang=en-us"
    },
    {
      "Date": "2023-03-22T07:00:00+05:30",
      "EpochDate": 1679448600,
      "Temperature": {
        "Minimum": {
          "Value": 19.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 32.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 5,
        "IconPhrase": "Hazy sunshine",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=3&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=3&unit=c&lang=en-us"
    },
    {
      "Date": "2023-03-23T07:00:00+05:30",
      "EpochDate": 1679535000,
      "Temperature": {
        "Minimum": {
          "Value": 21.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 32.2,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 5,
        "IconPhrase": "Hazy sunshine",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=4&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=4&unit=c&lang=en-us"
    },
    {
      "Date": "2023-03-24T07:00:00+05:30",
      "EpochDate": 1679621400,
      "Temperature": {
        "Minimum": {
          "Value": 21.0,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 32.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 5,
        "IconPhrase": "Hazy sunshine",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=5&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/in/chandrapur/189318/daily-weather-forecast/189318?day=5&unit=c&lang=en-us"
    }
  ]
}