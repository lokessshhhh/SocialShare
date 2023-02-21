import React, {Component, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {AuthStyle} from '../../../../../AuthScreens/AuthStyle';
import {CustomColors} from '../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import { Img } from '../../theme/Img';
import {Avatar} from 'react-native-elements';
import SelectButton from './SelectButton';
import { AllComponentStyle } from '../AllComponentStyles';
const FamilyCard = ({
  memberName,
  memberRelation,
  onPressGrey,
  onPressOrange,
}) => {
  return (
    <View style={AllComponentStyle.FamilycardView}>
      <Avatar containerStyle={{marginLeft: wp(2.5)}} source={Img.character} />

      <View style={{position: 'absolute', left: wp(15)}}>
        <Text
          style={{
            color: CustomColors.white,
            fontSize: hp(2.2),
            fontWeight: 'bold',
          }}
        >
          {memberName}
        </Text>
        <Text style={{color: CustomColors.lightGray4, fontSize: hp(1.8)}}>
          {memberRelation}
        </Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: wp(2.5),
          }}
        >
          <SelectButton
            onPress={onPressGrey}
            TextStyle={{color: CustomColors.black}}
            MainStyle={{backgroundColor: CustomColors.lightGray2}}
            ButtonText={'Edit'}
          />

          <SelectButton
            onPress={onPressOrange}
            TextStyle={{color: CustomColors.white}}
            MainStyle={{
              backgroundColor: CustomColors.orange,
              marginLeft: wp(2),
            }}
            ButtonText={'Delete'}
          />
        </View>
      </View>
    </View>
  );
};

export default FamilyCard;
