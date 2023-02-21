//import liraries
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import {Strings} from '../../theme/strings';

// create a component
const TextButton = ({ShowText,ViewStyle,onPress,TextStyle}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={ViewStyle}
    >
      <Text
        style={[TextStyle,{
          color: CustomColors.lightGray,
          borderColor: CustomColors.gray,
          textDecorationLine:'underline',
        }]}>
        {ShowText}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles

//make this component available to the app
export default TextButton;
