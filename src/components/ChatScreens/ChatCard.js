//import liraries
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Img} from '../../theme/Img';
import {ProfileStyles} from '../../screens/HomeScreens/BottomTabScreens/ProfileScreens/ProfileStyles';
import {CustomColors} from '../../theme/CustomColors';
import {AllComponentStyle} from '../AllComponentStyles';

// create a component
const ChatCard = ({
  Header,
  chatCount,
  UserActive,
  UserAvtar,
  UserName,
  ChatText,
  ChatTime,
  onPress,
  onPressMenu,
  onPressBack,
}) => {
  return (
    <TouchableOpacity
      disabled={Header ? true : false}
      onPress={onPress}
      style={[
        AllComponentStyle.chatMainButton,
        {
          width: Header ? wp(90) : wp(90),
          borderBottomWidth: Header ? 0 : 1,
          alignSelf: 'center',
        },
      ]}
    >
      {Header ? (
        <TouchableOpacity onPress={onPressBack}>
          <Image
            resizeMode="contain"
            style={{height: hp(5), width: hp(5)}}
            source={Img.backarr}
          />
        </TouchableOpacity>
      ) : null}

      <View>
        <View style={ProfileStyles.AvtarImg}>
          <Image
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
            source={UserAvtar}
          />
        </View>
        {UserActive ? <View style={AllComponentStyle.ActiveDot}></View> : null}
      </View>

      <View style={{marginRight: wp(25)}}>
        <Text
          style={{
            color: Header ? CustomColors.black : CustomColors.white,
            fontSize: hp(2.3),
          }}
        >
          {UserName}
        </Text>
        {UserActive ? (
          <Text style={{color: 'grey', fontWeight: 'bold', fontSize: hp(1.8)}}>
            {'Online'}
          </Text>
        ) : (
          <Text style={{color: 'gray', fontSize: hp(1.6), marginTop: 5}}>
            {ChatText}
          </Text>
        )}
      </View>
      {Header ? (
        <TouchableOpacity onPress={onPressMenu}>
          <Image
            resizeMode="contain"
            style={{height: hp(3.3), width: hp(3.3)}}
            source={Img.menudots}
          />
        </TouchableOpacity>
      ) : (
        <View style={{alignItems: 'center'}}>
          <Text style={{color: CustomColors.white, fontSize: hp(1.8)}}>
            {ChatTime}
          </Text>
          <View
            style={[
              AllComponentStyle.chatCounterDot,
              {
                height: chatCount >= 9 ? hp(3) : hp(2),
                width: chatCount >= 9 ? hp(3) : hp(2),
              },
            ]}
          >
            <Text style={{color: CustomColors.white, fontSize: hp(1.5)}}>
              {chatCount >= 9 ? '9+' : chatCount}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

//make this component available to the app
export default ChatCard;
