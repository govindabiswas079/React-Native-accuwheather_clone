import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Menu, Divider, Provider } from 'react-native-paper';
import { useSelector } from 'react-redux';

const HomeHeader = () => {
  const { isScroll } = useSelector(state => state?.reducerSlicer)
  const [visible, setVisible] = React.useState(false);

  return (
    <Fragment>
      <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 24, color: !isScroll ? "#FFFFFF" : '#252323' }}>Tukum</Text>
      <View style={{ flexGrow: 1 }} />
      <Appbar.Action icon="city" color={!isScroll ? "#FFFFFF" : '#252323'} />

      <Menu
        contentStyle={{ backgroundColor: '#FFFFFF', borderRadius: 10 }}
        visible={visible}
        onDismiss={() => setVisible(state => !state)}
        anchorPosition={'bottom'}
        anchor={<Appbar.Action icon="dots-vertical" color={!isScroll ? "#FFFFFF" : '#252323'} onPress={() => setVisible(state => !state)} />}>
        <TouchableOpacity style={{ width: '100%', height: 45, justifyContent: 'center', width: 90, padding: 10, backgroundColor: '#FFFFFF', }}>
          <Text style={{ color: '#252323', fontFamily: 'OpenSans-SemiBold', fontSize: 14, }}>Share</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={{ width: '100%', height: 45, justifyContent: 'center', width: 90, padding: 10, backgroundColor: '#FFFFFF', }}>
          <Text style={{ color: '#252323', fontFamily: 'OpenSans-SemiBold', fontSize: 14, }}>Settings</Text>
        </TouchableOpacity>
      </Menu>
    </Fragment>
  )
}

export default HomeHeader