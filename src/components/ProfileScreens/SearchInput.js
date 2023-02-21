//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Image } from 'react-native';
import { AuthStyle } from '../../../../AuthScreens/AuthStyle';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../theme/layout';
import { Img } from '../../theme/Img';
import { Strings } from '../../theme/strings';
import { CustomColors } from '../../theme/CustomColors';

// create a component
const SearchInput = ({value,onChangeText}) => {
    return (
        <View style={{width:wp(90),flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:CustomColors.white,borderRadius:15,height:hp(6)}}>
        <Image
        resizeMode='contain'
        style={{width:hp(2),height:hp(2),marginLeft:wp(5)}}
        source={Img.pfsearch}
        />
        <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{paddingLeft:wp(5),width:'85%',color:CustomColors.white}}
        placeholderTextColor={CustomColors.white}
        placeholder={Strings.searchfriends}
        />
    </View>
    );
};

// define your styles


//make this component available to the app
export default SearchInput;
