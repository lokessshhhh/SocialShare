//import liraries
import React, {Component, useState} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {CustomColors} from '../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {AllComponentStyle} from '../AllComponentStyles';
import SelectButton from './SelectButton';
import {Dropdown} from 'react-native-element-dropdown';

// create a component

const ButtonsCard = ({
  GreyText,
  OrangeText,
  onPressGrey,
  onPressOrange,
  placeholder,
  value,
  onChangeText,
  hidebutton,
  onFocus,
  MainViewStyle,
  editable,
  customPlaceholder,
  placeholderTextColor,
  customColor,
  color,
  isIcon,
  ImageStyle,
  hidegreybutton,
  source,
  isEditGender,
  editdropdownOnChange,
  editdropdowndata,
  editdropdownplaceholder,
  editdropdownvalue,
  customwidth,
  width,
  mainDropdownStyle,
  noleftmar
}) => {
  return (
    <View style={[AllComponentStyle.ButtonCardView, MainViewStyle]}>
      {isIcon ? (
        <Image
          resizeMode="contain"
          style={{
            tintColor: CustomColors.white,
            height: hp(2.5),
            width: hp(2.5),
            ImageStyle,
            marginLeft: wp(2.5),
          }}
          source={source}
        />
      ) : null}
      {isEditGender ? (
        <Dropdown
          iconStyle={{
            tintColor: 'white',
            marginRight: 10,
            backgroundColor: CustomColors.lightbg,
          }}
          placeholderStyle={{
            color: 'white',
            fontSize: hp(1.8),
            backgroundColor: CustomColors.lightbg,
          }}
          itemTextStyle={{
            color: CustomColors.primarybg,
            fontSize: hp(1.8),
            marginVertical: -15,
          }}
          containerStyle={{
            backgroundColor: CustomColors.white,
            borderColor: CustomColors.lightbg,
          }}
          selectedTextStyle={{
            color: CustomColors.primarybg,
            fontSize: hp(1.8),
            backgroundColor: CustomColors.lightbg,
          }}
          itemContainerStyle={{
            backgroundColor: CustomColors.white,
          }}
          style={[mainDropdownStyle,{
            width: customwidth ? width :wp(20),
            height: hp(6.5),
            alignSelf:'flex-start',
            marginLeft: noleftmar ?0: wp(-17),
          }]}
          data={editdropdowndata}
          labelField="label"
          valueField="value"
          placeholder={editdropdownplaceholder}
          value={editdropdownvalue}
          onChange={item => {
            editdropdownOnChange(item);
          }}
        />
      ) : (
        <TextInput
          editable={editable}
          onFocus={onFocus}
          selectTextOnFocus={hidebutton ? false : true}
          value={value}
          onChangeText={onChangeText}
          style={{
            paddingLeft: isIcon ? wp(0) : wp(5),
            width: hidebutton ? '80%' : hidegreybutton ? '60%' : '45%',
            color: customColor ? color : CustomColors.white,
          }}
          placeholderTextColor={
            customPlaceholder ? placeholderTextColor : CustomColors.white
          }
          placeholder={placeholder}
        />
      )}

      {hidebutton ? null : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: wp(5),
          }}
        >
          {hidegreybutton ? null : (
            <SelectButton
              onPress={onPressGrey}
              TextStyle={{color: CustomColors.black}}
              MainStyle={{backgroundColor: CustomColors.lightGray2}}
              ButtonText={GreyText}
            />
          )}
          <SelectButton
            onPress={onPressOrange}
            TextStyle={{color: CustomColors.white}}
            MainStyle={{
              backgroundColor: CustomColors.orange,
              marginLeft: wp(2),
            }}
            ButtonText={OrangeText}
          />
        </View>
      )}
    </View>
  );
};

//make this component available to the app
export default ButtonsCard;
