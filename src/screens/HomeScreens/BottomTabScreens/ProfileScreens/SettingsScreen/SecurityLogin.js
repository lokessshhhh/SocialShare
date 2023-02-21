//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
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
import ExpandButton from '../../../../../components/ProfileScreens/ExpandButton';
import {ProfileStyles} from '../ProfileStyles';
import ProfileCard from '../../../../../components/ProfileScreens/ProfileCard';
import {Avatar} from 'react-native-elements';
import TopHeader from '../../../../../components/HomeScreen/TopHeader';
import SelectButton from '../../../../../components/ProfileScreens/SelectButton';
import ButtonsCard from '../../../../../components/ProfileScreens/ButtonsCard';

// create a component
const SecurityLogin = ({navigation}) => {
  const GeneralSettings = [
    {title: '874234g23hj4478234',header:'User ID', img: Img.pfuser},
    {title: 'testdds@gmail.com',header:'Email', img: Img.security},
    {title: 'Please enter password',header:'Password', img: Img.info},
  ];

  return (
    <View style={AuthStyle.bgcolor}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <TopHeader HeaderText={Strings.settings} />

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
          <Text style={ProfileStyles.menumaintext}>
            {Strings.securitylogin}
          </Text>
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(15)}}
            style={{flex: 1}}
          >
            <View style={{width: wp(90), alignSelf: 'center'}}>

              {GeneralSettings.map((item,index) => (
                <View>
                  <Text style={ProfileStyles.menuheadertext}>
                    {item.header}
                  </Text>
                  <ButtonsCard
                  hidebutton={index === 0 || index === 1 ? true : false}
                    GreyText={Strings.cancel}
                    OrangeText={Strings.save}
                    placeholder={item.title}
                  />
                </View> 
              ))}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles

//make this component available to the app
export default SecurityLogin;
