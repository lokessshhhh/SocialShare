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
import {CustomColors} from '../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

// create a component
const SelectButton = ({MainStyle, TextStyle, onPress, ButtonText}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          padding: 3,
          borderRadius: 5,
          backgroundColor: CustomColors.orange,
          // width: wp(15),
          alignItems: 'center',
          paddingHorizontal: 15,
        },
        MainStyle,
      ]}
    >
      <Text
        style={[
          {
            color: CustomColors.white,
            fontSize: hp(1.7),
          },
          TextStyle,
        ]}
      >
        {ButtonText}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SelectButton;
