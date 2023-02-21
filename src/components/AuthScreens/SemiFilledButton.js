import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import { AllComponentStyle } from '../AllComponentStyles';

// create a component
const SemiFilledButton = ({onPress,EnterText}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={AllComponentStyle.SemiFilledView}>
      <Text
        style={{
          color: CustomColors.black,
          fontWeight: 'bold',
          fontSize: hp(2.6),
        }}>
        {EnterText}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles

//make this component available to the app
export default SemiFilledButton;
