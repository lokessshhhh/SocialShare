import React, {Component} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import {Img} from '../../theme/Img';

// create a component
const PlaceButton = ({Place,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        flexDirection: 'row',
        padding: hp(0.8),
        alignItems: 'center',
        backgroundColor: CustomColors.lightbg,
        borderRadius: 10,
      }}>
      <Image
        resizeMode="contain"
        style={{height: hp(2), width: hp(2)}}
        source={Img.location}
      />
      <Text style={{color: CustomColors.white, fontSize: hp(1.4)}}>
        {Place}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles

//make this component available to the app
export default PlaceButton;
