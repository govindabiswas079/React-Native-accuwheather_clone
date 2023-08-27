import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import moment from 'moment';
import { getSunrise, getSunset } from 'sunrise-sunset-js';
import { AnimatedCircularProgress, } from 'react-native-circular-progress';

const SunTimeing = () => {
  const sunrise = getSunrise(19.993984, 79.301474, new Date());
  const sunset = getSunset(19.993984, 79.301474);
  var dif = (new Date(sunset) - new Date(sunrise))/1000/60/60;
  const totalDiff = dif?.toFixed(0);
  console.log(totalDiff) //100/dif?.toFixed

  // console.log('sunrise', new Date('2023-03-20T00:47:32.639Z')?.getHours(), new Date('2023-03-20T00:47:32.639Z')?.getMinutes(), new Date('2023-12-31T12:13:17.840Z')?.getHours(), new Date('2023-12-31T12:13:17.840Z')?.getMinutes())
  // function getSolarEventsForYear(latitude, longitude, year) {
  //   let result = [];
  //   const start = new Date().getTime();
  //   console.log('start', start)
  //   for (let i = 0; i < 366; i++) {
  //     const d = new Date(start + (i * 24 * 60 * 60 * 1000));
  //     if (d.getFullYear() > year) break; // For non-leap year
  //     result.push({ 'sunrise': getSunrise(latitude, longitude, d), 'sunset': getSunset(latitude, longitude, d) });
  //   }
  //   return result;
  // }
  // console.log(getSolarEventsForYear(19.993984, 79.301474)?.length)


  return (
    <Fragment>
      <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10, elevation: 6, marginHorizontal: 15, marginTop: 30, marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10, marginTop: 10 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 20 }}>
            <Feather name='sunrise' size={25} color={'#ff4500b0'} />
            <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>{moment(sunrise)?.format("HH")}:{new Date(sunrise)?.getMinutes()}</Text>
          </View>
          <AnimatedCircularProgress
            size={200}
            width={3}
            fill={8 * 13}
            tintColor="#00e0ff"
            backgroundColor="#ff4500b0"
            arcSweepAngle={200}
            rotation={260}
            lineCap="butt"
            backgroundWidth={2}
            dashedBackground={{ width: 12, gap: 3 }}
            renderCap={({ center }) => {
              return (
                <Fragment>

                </Fragment>
              )
            }}
          />
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 20 }} >
            <Feather name='sunset' size={25} color={'#ff4500b0'} />
            <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 14 }}>{moment(sunset)?.format("HH")}:{new Date(sunset)?.getMinutes()}</Text>
          </View>
        </View>
      </View>
    </Fragment>
  )
}

export default SunTimeing