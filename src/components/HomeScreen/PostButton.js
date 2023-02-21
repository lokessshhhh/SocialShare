//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import { Img } from '../../theme/Img';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../theme/layout';

// create a component
const PostButton = ({source,mainStyle,onPress,ImgStyle}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={mainStyle}
        >
        <Image
        resizeMode='contain'
        style={[{height:hp(3),width:hp(3)},ImgStyle]}
        source={source}
        />
     </TouchableOpacity>
    );
};

// define your styles


//make this component available to the app
export default PostButton;
