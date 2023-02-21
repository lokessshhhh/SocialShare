//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import {AllComponentStyle} from '../AllComponentStyles';

// create a component

const ButtonFilled = ({MainViewStyle, onPress,ButtonText,fontstyle,Fontstyle,FontStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[AllComponentStyle.filledbuttonview, MainViewStyle]}>
      <Text style={[{color: CustomColors.white,fontSize: hp(2.5)},FontStyle]}>
        {ButtonText}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles

//make this component available to the app
export default ButtonFilled;
