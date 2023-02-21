//import liraries
//import liraries
import React, {Component} from 'react';
import {TextInput} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import { AllComponentStyle } from '../AllComponentStyles';

// create a component
const BorderInput = ({placeholder,InputStyle,onChangeText,value,onBlur}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      onBlur={onBlur}
      placeholder={placeholder}
      placeholderTextColor={CustomColors.white}
      style={[AllComponentStyle.inputStyle,InputStyle]}
    />
  );
};

// define your styles

//make this component available to the app
export default BorderInput;
