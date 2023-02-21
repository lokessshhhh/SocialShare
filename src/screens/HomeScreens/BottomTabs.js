//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Img} from '../../theme/Img';

import {CustomColors} from '../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import { Homestyle } from '../HomeScreens/Homestyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './BottomTabScreens/HomeScreens/HomeScreen';
import ProfileHome from './BottomTabScreens/ProfileScreens/ProfileHome';
import ProfileNavigator from '../../routestack/ProfileNavigator';
import ChatHome from './BottomTabScreens/ChatScreens/ChatHome';

// create a component
const BottomTabs = ({focused}) => {
  function screen1() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text>test</Text>
      </View>
    );
  }

  function screen2() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text>okokok</Text>
      </View>
    );
  }

  function screen3() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text>okokok</Text>
      </View>
    );
  }

  function screen4() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text>okokok</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
  
 <Tab.Navigator
    initialRouteName='ProfileHome'
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: Homestyle.maintabbar,
        
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <View>
                <View
                  style={Homestyle.IconView}>
                  <Image style={{height: 20, width: 20}} source={Img.home}/>
                </View>
                <Text
                  style={Homestyle.IconBottomText}>
                  Home
                </Text>
              </View>
            ) : (
              <Image
                resizeMode="contain"
                style={Homestyle.notfocusedImg}
                source={Img.home}
              />
            ),
          tabBarLabel: '',
        }}
        name="HomeScreen"
        component={HomeScreen}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <View>
                <View
                  style={Homestyle.IconView}>
                  <Image
                    style={{height: 20, width: 20, tintColor: '#fff'}}
                    source={Img.chat}
                  />
                </View>
                <Text
                  style={Homestyle.IconBottomText}>
                  Chat
                </Text>
              </View>
            ) : (
              <Image
                resizeMode="contain"
                style={Homestyle.notfocusedImg}
                source={Img.chat}
              />
            ),
          tabBarLabel: '',
        }}
        name="MyCollection"
        component={ChatHome}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <View>
                <View
                  style={Homestyle.IconView}>
                  <Image
                    style={{height: 20, width: 20, tintColor: '#fff'}}
                    source={Img.person}
                  />
                </View>
                <Text
                  style={Homestyle.IconBottomText}>
                  Profile
                </Text>
              </View>
            ) : (
              <Image
                resizeMode="contain"
                style={Homestyle.notfocusedImg}
                source={Img.person}
              />
            ),
          tabBarLabel: '',
        }}
        name="QRScanner"
        component={ProfileNavigator}></Tab.Screen>
    </Tab.Navigator>
  
   
  );
};


export default BottomTabs;
