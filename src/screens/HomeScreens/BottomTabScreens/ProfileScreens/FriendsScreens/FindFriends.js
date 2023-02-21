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
import {AuthStyle} from '../../../../AuthScreens/AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../theme/layout';
import {Strings} from '../../../../../theme/strings';
import {Img} from '../../../../../theme/Img';
import {Homestyle} from '../../../Homestyle';
import {ProfileStyles} from '../ProfileStyles';
import SearchInput from '../../../../../components/ProfileScreens/SearchInput';
import FriendsCard from '../../../../../components/ProfileScreens/FriendsCard';
import TopHeader from '../../../../../components/HomeScreen/TopHeader';

// create a component
const FindFriends = ({navigation}) => {
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
      <TopHeader
      HeaderText={Strings.findfriends}
      />
        <View style={Homestyle.MainCurvedCard}>
          <View style={{alignSelf: 'center', marginTop: hp(2.5)}}>
            <SearchInput />
            <Text style={ProfileStyles.headerMaintext}>

              {Strings.peopleyouknow}
            </Text>

            {/* <NoDataAlert
            mainViewStyle={{padding:30}}
            showsecondText
            secondText={Strings.pleaseaddsome}
            EnterAlert={Strings.nofriendssuggest}
            /> */}

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: hp(15)}}
            >
              {FrndReq.map((item, index) => (
                <FriendsCard
                  follow
                  userAvtar={Img.TTBabout}
                  UserLocation={'portugal north east'}
                  UserName={item.name}
                />
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
export default FindFriends;
