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
import {CustomColors} from '../../../../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../theme/layout';
import {Strings} from '../../../../../theme/strings';
import {Img} from '../../../../../theme/Img';
import {Homestyle} from '../../../Homestyle';
import ExpandButton from '../../../../../components/ProfileScreens/ExpandButton';
import {ProfileStyles} from '../ProfileStyles';
import ProfileCard from '../../../../../components/ProfileScreens/ProfileCard';
import {Avatar} from 'react-native-elements';
import TopHeader from '../../../../../components/HomeScreen/TopHeader';

// create a component
const SettingsHome = ({navigation}) => {
  const HomeSetting = [
    {title: 'General Settings', img: Img.pfuser},
    {title: 'Security and Login', img: Img.security},
    {title: 'Your GamerzNet Information', img: Img.info},
  ];

  return (
    <View style={AuthStyle.bgcolor}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <TopHeader 
        HeaderText={Strings.settings}
        />

        {/* 
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
        </TouchableOpacity> */}

        <View style={Homestyle.MainCurvedCard}>
          <ScrollView contentContainerStyle={{marginTop: hp(5)}}>
            {HomeSetting.map((item, index) => (
              <ProfileCard
                  onPress={()=>{
                    index === 0 ? navigation.navigate('GeneralSettings') :
                    index === 1 ? navigation.navigate('SecurityLogin') :
                    index === 2 ? navigation.navigate('SocialInfo') :
                    null
                  }}
                menuImg={item.img}
                MenuName={item.title}
                MainViewStyle={{marginTop: hp(2)}}
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles

//make this component available to the app
export default SettingsHome;
