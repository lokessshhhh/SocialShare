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
import {ProfileStyles} from '../../screens/HomeScreens/BottomTabScreens/ProfileScreens/ProfileStyles';

// create a component

const RequestCard = ({userAvtar, UserName,onPressOrange,onPressGrey}) => {

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingVertical: hp(2),
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
      <View style={{marginLeft: wp(5)}}>
        <Text
          style={{
            color: CustomColors.white,
            fontSize: hp(2.3),
            marginBottom: hp(1.5),
          }}
        >
          {UserName}
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SelectButton
          onPress={onPressOrange}
            MainStyle={{padding: 5, paddingHorizontal: 15}}
            ButtonText={Strings.addfriend}
          />
          <SelectButton
            onPress={onPressGrey}
            TextStyle={{color: CustomColors.black}}
            MainStyle={{
              backgroundColor: CustomColors.lightGray,
              marginLeft: wp(4),
              padding: 5,
              paddingHorizontal: 15,
            }}
            ButtonText={Strings.remove}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

//make this component available to the app

export default RequestCard;
