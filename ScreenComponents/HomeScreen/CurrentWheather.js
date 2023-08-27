import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';

const CurrentWheather = () => {
  const { isScroll } = useSelector(state => state?.reducerSlicer)

  return (
    <Fragment>
      <View style={{ backgroundColor: isScroll ? "#FFFFFF" : 'transparent', width: '100%', justifyContent: 'center', alignItems: "center", height: 500, marginTop: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: !isScroll ? "#FFFFFF" : "#252323", fontFamily: 'OpenSans-SemiBold', fontSize: 70 }}>32</Text>
          <Text style={{ color: !isScroll ? "#FFFFFF" : "#252323", fontFamily: 'OpenSans-SemiBold', fontSize: 35 }}>&deg;C</Text>
        </View>
        <Text style={{ color: !isScroll ? "#FFFFFF" : "#252323", fontFamily: 'OpenSans-SemiBold', fontSize: 18 }}>Hazy sunshine 21 ~ 32&deg;C</Text>
      </View>
    </Fragment>
  )
}

export default CurrentWheather