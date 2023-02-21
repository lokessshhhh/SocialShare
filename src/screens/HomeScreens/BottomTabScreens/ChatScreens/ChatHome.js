//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {AuthStyle} from '../../../AuthScreens/AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../theme/layout';
import {Strings} from '../../../../theme/strings';
import {Img} from '../../../../theme/Img';
import {Homestyle} from '../../Homestyle';
import {ProfileStyles} from '../ProfileScreens/ProfileStyles';
import SearchInput from '../../../../components/ProfileScreens/SearchInput';
import FriendsCard from '../../../../components/ProfileScreens/FriendsCard';
import TopHeader from '../../../../components/HomeScreen/TopHeader';
import NoDataAlert from '../../../../components/ProfileScreens/NoDataAlert';
import {CustomColors} from '../../../../theme/CustomColors';
import ChatCard from '../../../../components/ChatScreens/ChatCard';

// create a component
const ChatHome = ({navigation}) => {
  const [chatCount, SetchatCount] = useState(10);
  const [IsVisible, SetVisible] = useState(false);

  const ChatUserArray = [
    {
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
    },
    {
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: false,
    },
    {
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: false,
    },
  ];

  return (
    <View style={AuthStyle.bgcolor}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <TopHeader HeaderText={Strings.chat} />
        <View style={Homestyle.MainCurvedCard}>
          <View style={{alignSelf: 'center', marginTop: hp(2.5)}}>
            <SearchInput />

            {IsVisible ? (
              <View>
                <NoDataAlert
                  mainViewStyle={{padding: 60}}
                  EnterAlert={Strings.addfriends}
                />
                
                <ScrollView
                 contentContainerStyle={{paddingBottom: hp(15)}}
                 style={{flex: 1}}
                >
                  {ChatUserArray.map((item, index) => (
                    <ChatCard 
                    onPress={()=>{
                      navigation.navigate('PersonalChat')
                    }}
                    UserName={item.name}
                    UserAvtar={item.avtar}
                    ChatText={item.msg}
                    ChatTime={item.time}
                    UserActive={item.active} 
                    chatCount={chatCount} 
                    />
                  ))}
                </ScrollView>
              </View>
            ) : (
              <View>
                <NoDataAlert
                  mainViewStyle={{padding: 60}}
                  EnterAlert={Strings.putadds}
                />

                <NoDataAlert
                  showButton
                  showimg
                  mainViewStyle={{padding: 60}}
                  EnterAlert={Strings.oopsnofriends}
                  onPress={() => {
                    SetVisible(!IsVisible);
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles

//make this component available to the app
export default ChatHome;
