//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AuthStyle} from '../../../../AuthScreens/AuthStyle';
import {CustomColors} from '../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../theme/strings';
import {AllComponentStyle} from '../AllComponentStyles';

// create a component
const AboutCard = ({onPress,overviewtext,overviewimg}) => {

const [IsFocus,SetIsFocus] = useState(false);

  return (
    <TouchableOpacity
    onFocus={()=>{
        SetIsFocus(!IsFocus);
        console.log(IsFocus,'====');
    }}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(2),
        borderBottomWidth: 1,
        borderColor: CustomColors.lightbg,
        paddingBottom: hp(1.5),
      }}
    >
      <View
        style={{
          height: hp(4.5),
          alignItems: 'center',
          justifyContent: 'center',
          width: hp(4.5),
          borderRadius: 100,
          overflow: 'hidden',
          backgroundColor: CustomColors.lightbg,
        }}
      >
        <Image
          resizeMode="contain"
          style={{height: hp(2), width: hp(2)}}
          source={overviewimg}
        />
      </View>

      <Text style={[AllComponentStyle.MenuTextStyle, {fontSize: hp(2.3), color:IsFocus ? CustomColors.orange : CustomColors.white,}]}>
        {overviewtext}
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
export default AboutCard;
