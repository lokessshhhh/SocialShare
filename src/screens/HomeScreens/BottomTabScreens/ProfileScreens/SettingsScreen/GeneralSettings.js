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
import SelectButton from '../../../../../components/ProfileScreens/SelectButton';
import ButtonsCard from '../../../../../components/ProfileScreens/ButtonsCard';

// create a component
const GeneralSettings = ({navigation}) => {
  const GeneralSettings = [
    {title: 'Test DDS',header:'Name', img: Img.pfuser},
    {title: 'testdds',header:'Username', img: Img.security},
    {title: 'testdds@gmail.com',header:'Contact', img: Img.info},
  ];

  return (
    <View style={AuthStyle.bgcolor}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <TopHeader HeaderText={Strings.settings} />


        {/* Dont Remove Important */}

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
            {Strings.generalsettings}
          </Text>
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(15)}}
            style={{flex: 1}}
          >
            <View style={{width: wp(90), alignSelf: 'center'}}>
              {GeneralSettings.map(item => (
                <View>
                  <Text style={ProfileStyles.menuheadertext}>
                    {item.header}
                  </Text>
                  <ButtonsCard
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
export default GeneralSettings;
