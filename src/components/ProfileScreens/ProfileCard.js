//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AllComponentStyle} from '../../components/AllComponentStyles';
import {Img} from '../../theme/Img';
import {Homestyle} from '../../Homestyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import {Avatar} from 'react-native-elements';

// create a component
const ProfileCard = ({onPress,MainViewStyle,MenuName,menuImg}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[AllComponentStyle.ProfileCard,MainViewStyle]}>
      <View style={AllComponentStyle.AvtarImgView}>
        <Image
          resizeMode="contain"
          style={{height: hp(2.8), width: hp(2.8)}}
          source={menuImg}
        />
      </View>
      <Text style={AllComponentStyle.MenuTextStyle}>{MenuName}</Text>
      <Image
        resizeMode="contain"
        style={{
          height: hp(3.5),
          width: hp(3.5),
          position: 'absolute',
          right: wp(4),
        }}
        source={Img.pfarrow}
      />
    </TouchableOpacity>
  );
};

// define your styles

//make this component available to the app
export default ProfileCard;
