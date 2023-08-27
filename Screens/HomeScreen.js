import React, { Fragment } from 'react';
import { ScrollView, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider } from 'react-native-paper';
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../AppHeader/AppHeader';
import { HomeHeader, CurrentWheather, HourlyWheather, FiveDaysWheather, GravityWheather, SunTimeing } from '../ScreenComponents/HomeScreen'
import { setIsScroll } from '../store/reducerSlicer'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { isScroll } = useSelector(state => state?.reducerSlicer)
  const insets = useSafeAreaInsets();

  const onScroll = (e) => {
    let contentOffsetY = e.nativeEvent.contentOffset.y;
    if (contentOffsetY < 100) {
      dispatch(setIsScroll(false));
    } else {
      dispatch(setIsScroll(true));
    }
  };


  return (
    <Fragment>
      <Provider>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <ImageBackground source={{ uri: 'http://cardinalwxservice.com/wp-content/uploads/2018/02/dreamstimefree_20823097.jpg' }} resizeMode="cover" style={{ width: '100%', flex: 1, backgroundColor: '#eeeeeedb', /* paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right */ }}>
            {/* <View style={{ flex: 1, backgroundColor: '#eeeeeedb', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }}> */}
            <FocusAwareStatusBar translucent={true} barStyle={isScroll ? 'dark-content' : 'light-content'} backgroundColor={isScroll ? "#FFFFFF" : "#f0f8ff00"} />
            <AppHeader style={{ backgroundColor: isScroll ? "#FFFFFF" : "transparent", alignItems: 'center', paddingLeft: 15, }}>
              <HomeHeader />
            </AppHeader>

            <ScrollView onScroll={(e) => onScroll(e)} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true}>
              <CurrentWheather />

              <View style={{ backgroundColor: isScroll ? "#FFFFFF" : '#f0f8ff38', transition: '3s', transitionDelay: '1s' }}>
                <HourlyWheather />
                <FiveDaysWheather />
                <GravityWheather />
                <SunTimeing />
              </View>
            </ScrollView>
            {/* </View> */}
          </ImageBackground>
        </View>
      </Provider>
    </Fragment >
  )
}

export default HomeScreen