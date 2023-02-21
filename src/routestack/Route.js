import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Home from '../screens/AuthScreens/LoginScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import ForgetPass from '../screens/AuthScreens/ForgetPass';
import ResetPass from '../screens/AuthScreens/ResetPass';
import BottomTabs from '../screens/HomeScreens/BottomTabs';
import HomeScreen from '../screens/HomeScreens/BottomTabScreens/HomeScreens/HomeScreen';
import linking from '../../linking';
import ProfileHome from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/ProfileHome';
import UserProfile from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/UserProfile';
import Timeline from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/TimeLine';
import OverviewScreen from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/OverviewScreen';
import WorkEducation from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/WorkEducation';
import PlaceLived from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/PlaceLived';
import ContactInfo from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/ContactInfo';
import FamilyRelations from '../screens/HomeScreens/BottomTabScreens/ProfileScreens/TopTabBarScreens/AboutUserScreens/FamilyRelations';
import PersonalChat from '../screens/HomeScreens/BottomTabScreens/ChatScreens/PersonalChat';

const Stack = createNativeStackNavigator();

const screens = [
 
  {
    name: 'BottomTabs',
    component: BottomTabs,
  },
  {
    name: 'SplashScreen',
    component: SplashScreen,
  },
 
  
  {
    name: 'PersonalChat',
    component: PersonalChat,
  },
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },

  {
    name: 'ResetPass',
    component: ResetPass,
  },

  {
    name: 'ForgetPass',
    component: ForgetPass,
  },

  {
    name: 'SignUpScreen',
    component: SignUpScreen,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
];

export function Route() {
  return (
    <NavigationContainer linking={linking}>
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
    </NavigationContainer>
  );
}
