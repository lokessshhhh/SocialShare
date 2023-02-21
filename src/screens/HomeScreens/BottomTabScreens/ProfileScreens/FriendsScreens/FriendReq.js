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
} from 'react-native';
import {AuthStyle} from '../../../../AuthScreens/AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../theme/layout';
import {Strings} from '../../../../../theme/strings';
import {Img} from '../../../../../theme/Img';
import {Homestyle} from '../../../Homestyle';
import ExpandButton from '../../../../../components/ProfileScreens/ExpandButton';
import {ProfileStyles} from '../ProfileStyles';
import SearchInput from '../../../../../components/ProfileScreens/SearchInput';
import {CustomColors} from '../../../../../theme/CustomColors';
import SelectButton from '../../../../../components/ProfileScreens/SelectButton';
import RequestCard from '../../../../../components/ProfileScreens/RequestCard';

// create a component
const FriendReq = ({navigation}) => {
  const FrndReq = [
    {name: 'Alex Costa'},
    {name: 'Alex Costa'},

    {name: 'Alex Costa'},

    {name: 'Alex Costa'},

    {name: 'Alex Costa'},

    {name: 'Alex Costa'},
    {name: 'Alex Costa'},
    {name: 'Alex Costa'},
    {name: 'Alex Costa'},
    {name: 'Alex Costa'},
    {name: 'Alex Costa'},
    {name: 'Alex Costa'},
    {name: 'Alex Costa'},
    {name: 'Alex Costa'},
  ];

  return (
    <View style={AuthStyle.bgcolor}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={ProfileStyles.backimgview}
        >
          <Image
            resizeMode="contain"
            style={ProfileStyles.backimg}
            source={Img.backarrow}
          />
        </TouchableOpacity>

        <View style={Homestyle.MainCurvedCard}>
          <View style={{alignSelf: 'center', marginTop: hp(2.5)}}>
            <SearchInput />
            <Text style={ProfileStyles.headerMaintext}>
              {' '}
              {Strings.peopleyouknow}
            </Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: hp(15)}}
            >
              {FrndReq.map(item => (
                <RequestCard UserName={item.name} userAvtar={Img.TTBabout} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles

//make this component available to the app
export default FriendReq;
