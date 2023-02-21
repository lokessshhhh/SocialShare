//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AuthStyle} from '../../../../AuthScreens/AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {Strings} from '../../theme/strings';
import {CustomColors} from '../../theme/CustomColors';
import SelectButton from './SelectButton';
import { ProfileStyles } from '../../screens/HomeScreens/BottomTabScreens/ProfileScreens/ProfileStyles';

// create a component


const FriendsCard = ({userAvtar,UserName,UserLocation,follow,onPress}) => {
    return (
        <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          paddingVertical: hp(1.8),
          borderColor: CustomColors.lightbg,
        }}
      >
        <View style={ProfileStyles.AvtarImg}>
          <Image
            resizeMode="contain"
            style={{height: hp(2), width: hp(2)}}
            source={userAvtar}
          />
        </View>
        <View style={{marginLeft: wp(-20)}}>
          <Text style={{color: CustomColors.white, fontSize: hp(2.3)}}>
            {UserName}
          </Text>
          <Text style={{color: 'gray', fontSize: hp(1.5)}}>
            {UserLocation}
          </Text>
        </View>
        <SelectButton 
        onPress={onPress}
        ButtonText={follow ? Strings.follow : Strings.following} />
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
export default FriendsCard;
