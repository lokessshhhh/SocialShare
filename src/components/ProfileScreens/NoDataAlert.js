//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Homestyle} from '../../screens/HomeScreens/Homestyle';
import {Img} from '../../theme/Img';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import SelectButton from './SelectButton';

// create a component
const NoDataAlert = ({
  EnterAlert,
  showButton,
  showsecondText,
  secondText,
  mainViewStyle,
  showimg,
  onPress
}) => {
  return (
    <View style={[Homestyle.NoPostTextView, mainViewStyle]}>
      {showimg ? (
        <Image
          resizeMode="contain"
          style={{height: hp(5), width: hp(5), marginBottom: hp(2)}}
          source={Img.pfchat}
        />
      ) : null}
      <Text style={Homestyle.NoPostTextStyle}>{EnterAlert}</Text>
      {showsecondText ? (
        <Text style={{color: 'gray', fontSize: hp(1.6), marginTop: hp(1)}}>
          {secondText}
        </Text>
      ) : showButton ? (
        <SelectButton
          onPress={onPress}
          TextStyle={{fontSize: hp(2),fontWeight:'bold'}}
          MainStyle={{
            padding: 5,
            paddingHorizontal: 28,
            marginTop: hp(1.5),
            marginBottom: hp(-2.5),
          }}
          ButtonText={'Chat Panel'}
        />
      ) : null}
    </View>
  );
};

//make this component available to the app
export default NoDataAlert;
