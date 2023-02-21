//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { CustomColors } from '../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Img} from '../../theme/Img';
import { Homestyle } from '../../screens/HomeScreens/Homestyle';
import {Avatar} from 'react-native-elements';
// create a component
const TopHeader = ({HeaderText,onPress}) => {
    return (
        <View style={[Homestyle.TopBellView,{marginTop:hp(4)}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar rounded size={50} source={Img.character} />
          <Text
            style={{
              color: CustomColors.black,
              fontSize: hp(2.5),
              fontWeight: 'bold',
              marginLeft: wp(2.5),
            }}
          >
            {HeaderText}
          </Text>
        </View>
        <TouchableOpacity
        onPress={onPress}
        >
          <Image
            resizeMode="contain"
            style={Homestyle.BellSize}
            source={Img.bell}
          />
        </TouchableOpacity>
      </View>
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
export default TopHeader;
