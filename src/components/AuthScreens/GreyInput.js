//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Img} from '../../theme/Img';
import {AuthStyle} from './AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import {AllComponentStyle} from '../AllComponentStyles';
import {useState} from 'react';

// create a component
const GreyInput = ({
  showimg,
  TextInputStyle,
  placeholder,
  onPress,
  mainViewStyle,
  onFocus,
  value,
  onChangeText,
  IsSecure,
  maxLength
}) => {
  const [ShowEye, SetShowEye] = useState(false);

  return (
    <View style={[AllComponentStyle.GreyMainView, mainViewStyle]}>
      <TextInput
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!ShowEye && IsSecure ? true : false}
        onFocus={onFocus}
        placeholderTextColor={CustomColors.gray}
        placeholder={placeholder}
        style={[TextInputStyle, {width: '70%'}]}
      />
      {showimg ? (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            SetShowEye(!ShowEye);
          }}>
          {ShowEye ? (
            <Image
              resizeMode="contain"
              style={AllComponentStyle.eyeimgsize}
              source={Img.eyeopen}
            />
          ) : (
            <Image
              resizeMode="contain"
              style={AllComponentStyle.eyeimgsize}
              source={Img.eyeclosed}
            />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

// define your styles

//make this component available to the app
export default GreyInput;
