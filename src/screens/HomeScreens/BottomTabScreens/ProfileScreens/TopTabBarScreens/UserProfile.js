//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AllComponentStyle} from '../../../../../components/AllComponentStyles';
import {Img} from '../../../../../theme/Img';
import {Homestyle} from '../../../Homestyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../theme/layout';
import {CustomColors} from '../../../../../theme/CustomColors';
import {Avatar} from 'react-native-elements';
import ProfileCard from '../../../../../components/ProfileScreens/ProfileCard';
import ImagePicker from 'react-native-image-crop-picker';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Timeline from './TimeLine';
import AboutUser from './AboutUser';
import PhotosScreen from './PhotosScreen';
import VideosScreen from './VideosScreen';
import FriendsScreen from './FriendsScreen';

// create a component
const UserProfile = () => {

  const Tab = createMaterialTopTabNavigator();

  function HomeScreen() {
    <View style={{flex: 1}}>
      <Text>MyHomeScreen</Text>
    </View>;
  }

  function FavScreen() {
    <View style={{flex: 1}}>
      <Text>MyFavScreen</Text>
    </View>;
  }

  function FeedScreen() {
    <View style={{flex: 1}}>
      <Text>MyFeedScreen</Text>
    </View>;
  }

  function ProfileScreen() {
    <View style={{flex: 1}}>
      <Text>MyProfileScreen</Text>
    </View>;
  }
  function Testing() {
    <View style={{flex: 1}}>
      <Text>MyProfileScreen</Text>
    </View>;
  }
  function TestingTwo() {
    return (
      <View style={{flex: 1}}>
        <Text>MyProfileScreen</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <View style={Homestyle.MainCurvedCard}>
          <Tab.Navigator
            swipeEnabled={false}
            tabBarOptions={{
              pressColor: 'transparent',
            }}
            screenOptions={{
              tabBarStyle: {
                backgroundColor: 'transparent',
                marginTop: 10,
                elevation: 0, // for Android
                shadowOffset: {
                  width: 0,
                  height: 0, // for iOS
                },
                paddingHorizontal: wp(5),
              },
              tabBarItemStyle: {
                paddingTop: 20,
                width: 'auto',
                alignItems: 'flex-start',
              },
              tabBarScrollEnabled: true,
              tabBarIndicatorStyle: {
                backgroundColor: 'transparent',
                elevation: 0,
              },
            }}
          >
            <Tab.Screen
              name="timeline"
              component={Timeline}
              options={{
                tabBarLabel: ({focused}) => (
                  <View
                    style={[
                      {
                        backgroundColor: focused ?  CustomColors.orange : CustomColors.lightbg,
                        borderColor: '#EEE6F1',
                        borderRadius: 15,
                        alignItems: 'center',
                        marginLeft:wp(-2.5),
                        // paddingHorizontal:-70,
                        justifyContent: 'center',
                        height: hp(10),
                        width: hp(9),
                        marginRight:wp(-2.5),
                      },
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={{
                        height: hp(3.8),
                        width: hp(3.8),
                        tintColor: CustomColors.white,
                        marginBottom:hp(0.5)
                      }}
                      source={Img.TTBwatch}
                    />
                    <Text
                      
                      style={{color: CustomColors.white, fontSize: hp(1.8),textAlign:'center'}}
                    >
                      Timeline
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Selling"
              component={AboutUser}
              options={{
                tabBarLabel: ({focused}) => (
                    <View
                    style={[
                      {
                        backgroundColor: focused ?  CustomColors.orange : CustomColors.lightbg,                        borderColor: '#EEE6F1',
                        borderRadius: 15,
                        alignItems: 'center',
                        
                        // paddingHorizontal:-70,
                        justifyContent: 'center',
                        height: hp(10),
                        width: hp(9),
                        marginRight:wp(-2.5),

                      },
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={{
                        height: hp(3.8),
                        width: hp(3.8),
                        tintColor: CustomColors.white,
                        marginBottom:hp(0.5)
                      }}
                      source={Img.TTBabout}
                    />
                    <Text
                      
                      style={{color: CustomColors.white, fontSize: hp(1.8),textAlign:'center'}}
                    >
                      About
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Buying"
              component={PhotosScreen}
              options={{
                tabBarLabel: ({focused}) => (
                    <View
                    style={[
                      {
                        backgroundColor: focused ?  CustomColors.orange : CustomColors.lightbg,                        borderColor: '#EEE6F1',
                        borderRadius: 15,
                        alignItems: 'center',
                        
                        // paddingHorizontal:-70,
                        justifyContent: 'center',
                        height: hp(10),
                        width: hp(9),
                        marginRight:wp(-2.5),

                      },
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={{
                        height: hp(3.8),
                        width: hp(3.8),
                        tintColor: CustomColors.white,
                        marginBottom:hp(0.5)
                      }}
                      source={Img.TTBphotos}
                    />
                    <Text
                      
                      style={{color: CustomColors.white, fontSize: hp(1.8),textAlign:'center'}}
                    >
                      Photos
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Girl"
              component={VideosScreen}
              options={{
                tabBarLabel: ({focused}) => (
                    <View
                    style={[
                      {
                        backgroundColor: focused ?  CustomColors.orange : CustomColors.lightbg,                        borderColor: '#EEE6F1',
                        borderRadius: 15,
                        alignItems: 'center',
                        // 
                        // paddingHorizontal:-70,
                        justifyContent: 'center',
                        height: hp(10),
                        width: hp(9),
                        marginRight:wp(-2.5),

                      },
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={{
                        height: hp(3.8),
                        width: hp(3.8),
                        tintColor: CustomColors.white,
                        marginBottom:hp(0.5)
                      }}
                      source={Img.TTBplay}
                    />
                    <Text
                      
                      style={{color: CustomColors.white, fontSize: hp(1.8),textAlign:'center'}}
                    >
                      Videos
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Nails"
              component={FriendsScreen}
              options={{
                tabBarLabel: ({focused}) => (
                    <View
                    style={[
                      {
                        backgroundColor: focused ?  CustomColors.orange : CustomColors.lightbg,                        borderColor: '#EEE6F1',
                        borderRadius: 15,
                        alignItems: 'center',
                        
                        // paddingHorizontal:-70,
                        justifyContent: 'center',
                        height: hp(10),
                        width: hp(9),
                        marginRight:wp(-2.5),

                      },
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={{
                        height: hp(3.8),
                        width: hp(3.8),
                        tintColor: CustomColors.white,
                        marginBottom:hp(0.5)
                      }}
                      source={Img.TTBfriends}
                    />
                    <Text
                    //   
                      style={{color: CustomColors.white, fontSize: hp(1.8),textAlign:'center'}}
                    >
                      Friends
                    </Text>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default UserProfile;
