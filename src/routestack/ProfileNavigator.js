//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileHome from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/ProfileHome';
import UserProfile from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/UserProfile';
import PlaceLived from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/PlaceLived';
import ContactInfo from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/ContactInfo';
import FamilyRelations from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/FamilyRelations';
import WorkEducation from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/WorkEducation';
import OverviewScreen from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/OverviewScreen';
import Timeline from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/TimeLine';
import DetailsAbout from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/DetailsAbout';
import LifeEvents from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/LifeEvents';
import FriendReq from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/FriendsScreens/FriendReq';
import FindFriends from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/FriendsScreens/FindFriends';
import SettingsHome from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/SettingsScreen/SettingsHomes';
import GeneralSettings from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/SettingsScreen/GeneralSettings';
import SecurityLogin from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/SettingsScreen/SecurityLogin';
import SocialInfo from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/SettingsScreen/SocialInfo';

// create a component
const ProfileNavigator = () => {


  const Stack = createNativeStackNavigator();

  const screens = [
    {
      name: 'ProfileHome',
      component: ProfileHome,
    },
    {
      name: 'FriendReq',
      component: FriendReq,
    },
    {
      name: 'GeneralSettings',
      component: GeneralSettings,
    },
    {
      name: 'SecurityLogin',
      component: SecurityLogin,
    },
    {
      name: 'SocialInfo',
      component: SocialInfo,
    },
    {
      name: 'SettingsHome',
      component: SettingsHome,
    },
    {
      name: 'FindFriends',
      component: FindFriends,
    },
    {
      name: 'UserProfile',
      component: UserProfile,
    },
    {
        name: 'PlaceLived',
        component: PlaceLived,
      },
      {
        name: 'ContactInfo',
        component: ContactInfo,
      },
      {
        name: 'FamilyRelations',
        component: FamilyRelations,
      },
      {
        name: 'WorkEducation',
        component: WorkEducation,
      },
      {
        name: 'OverviewScreen',
        component: OverviewScreen,
      },
      {
        name: 'Timeline',
        component: Timeline,
      },
      {
        name: 'DetailsAbout',
        component: DetailsAbout,
      },
      {
        name: 'LifeEvents',
        component: LifeEvents,
      },
  ];

  return (
    <Stack.Navigator
      // initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      {screens.map(item => (
        <Stack.Screen name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

// define your styles

//make this component available to the app
export default ProfileNavigator;
