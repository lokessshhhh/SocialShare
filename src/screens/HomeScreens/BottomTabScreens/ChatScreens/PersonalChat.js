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
  TextInput,
  FlatList,
} from 'react-native';
import {AuthStyle} from '../../../AuthScreens/AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../theme/layout';
import {Img} from '../../../../theme/Img';
import {Homestyle} from '../../Homestyle';
import ChatCard from '../../../../components/ChatScreens/ChatCard';
import {CustomColors} from '../../../../theme/CustomColors';
import {ChatStyle} from './ChatStyles';

// create a component
const PersonalChat = ({navigation}) => {

  const ChatMsg = [
    {
      id: 1,
      msgno: 1,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
    },
    {
      id: 2,
      msgno: 1,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      id: 2,
      msgno: 2,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      id: 1,
      msgno: 1,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: false,
    },
    {
      id: 2,
      msgno: 1,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      id: 1,
      msgno: 1,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: false,
    },
    {
      id: 2,
      msgno: 1,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      id: 1,
      msgno: 1,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: false,
    },
    {
      id: 2,
      msgno: 1,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      id: 2,
      msgno: 2,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      id: 2,
      msgno: 3,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: true,
    },
    {
      id: 1,
      msgno: 1,
      name: 'Alex Costa',
      msg: 'Hello How are you',
      time: '06:50 PM',
      avtar: Img.bell,
      active: false,
    },
  ];

  const getmax = () => {
    const highestMaxScore = Math.max(...ChatMsg.map(member => member.msgno));
    console.log(highestMaxScore);
  };

  const ChatData = ({item}) => {
    return (
      <View>
        {item.id === 1 ? (
          <View
            style={{
              marginVertical: 10,
              marginLeft: '20%',
              alignItems: 'flex-end',
            }}
          >
            <Text style={ChatStyle.orangetext}>{item.msg}</Text>
            <Text style={{marginRight: 15, fontSize: 10, color: 'white'}}>
              {item.time}
            </Text>
          </View>
        ) : (
          <View style={ChatStyle.greyTextView}>
            {item.msgno === 1 ? (
              <View style={ChatStyle.chatavtarview}>
                <Image
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                  source={Img.character}
                />
              </View>
            ) : (
              <View style={ChatStyle.emptyavtarBg}></View>
            )}

            <View>
              <Text style={ChatStyle.greytext}>{item.msg}</Text>
              <Text style={{marginLeft: 15, fontSize: 10, color: 'white'}}>
                {item.time}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={AuthStyle.bgcolor}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <ChatCard
          UserActive
          Header
          UserName={'Alex Costa'}
          UserAvtar={Img.character}
        />
        <View style={Homestyle.MainCurvedCard}>
          <View style={{paddingBottom: hp(9), marginTop: hp(5)}}>
            <FlatList
              // inverted={true}
              data={ChatMsg}
              renderItem={ChatData}
            />
          </View>

          <View style={ChatStyle.SendtextInputView}>
            <TextInput
              style={{
                width: '85%',
              }}
              placeholder="Type Message"
            />

            <TouchableOpacity
              onPress={() => {
                getmax();
              }}
              hitSlop={{right: 20, left: 20, top: 20, bottom: 20}}
              style={{marginRight: wp(4)}}
            >
              <Image
                resizeMode="contain"
                style={{height: hp(2.7), width: hp(2.7)}}
                source={Img.sendchat}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles

//make this component available to the app
export default PersonalChat;
