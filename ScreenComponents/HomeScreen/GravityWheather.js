import { View, Text } from 'react-native';
import React, { Fragment } from 'react';
import { Col, Row } from 'react-native-responsive-grid-system';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const GravityWheather = () => {

  return (
    <Fragment>
      <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: 10, elevation: 6, marginHorizontal: 15, marginTop: 30 }}>
        <View style={{ paddingTop: 20 }}>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name={'temperature-low'} color={'#117cd9'} size={20} />
                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 15, paddingTop: 10 }}>32&deg;C</Text>
                <Text style={{ color: 'gray', fontFamily: 'OpenSans-SemiBold', fontSize: 12, paddingTop: 5 }}>Feels like</Text>
              </View>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Feather name={'slack'} color={'#117cd9'} size={20} />
                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 15, paddingTop: 10 }}>Force 2</Text>
                <Text style={{ color: 'gray', fontFamily: 'OpenSans-SemiBold', fontSize: 12, paddingTop: 5 }}>SW</Text>
              </View>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name={'water'} color={'#117cd9'} size={20} />
                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 15, paddingTop: 10 }}>43%</Text>
                <Text style={{ color: 'gray', fontFamily: 'OpenSans-SemiBold', fontSize: 12, paddingTop: 5 }}>Humidity</Text>
              </View>
            </Col>
          </Row>
        </View>
        <View style={{ paddingTop: 40, paddingBottom: 20 }}>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#117cd9', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontFamily: 'OpenSans-SemiBold', fontSize: 12 }}>UV</Text>
                </View>
                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 15, paddingTop: 10 }}>Weaker</Text>
                <Text style={{ color: 'gray', fontFamily: 'OpenSans-SemiBold', fontSize: 12, paddingTop: 5 }}>UV</Text>
              </View>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name={'visibility'} color={'#117cd9'} size={20} />
                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 15, paddingTop: 10 }}>8 km</Text>
                <Text style={{ color: 'gray', fontFamily: 'OpenSans-SemiBold', fontSize: 12, paddingTop: 5 }}>Visibility</Text>
              </View>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name={'tachometer-alt'} color={'#117cd9'} size={20} />
                <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 15, paddingTop: 10 }}>1010 hPa</Text>
                <Text style={{ color: 'gray', fontFamily: 'OpenSans-SemiBold', fontSize: 12, paddingTop: 5 }}>Air pressure</Text>
              </View>
            </Col>
          </Row>
        </View>
      </View>
    </Fragment>
  )
}

export default GravityWheather