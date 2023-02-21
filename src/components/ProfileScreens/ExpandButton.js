//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import {CustomColors} from '../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import SelectButton from './SelectButton';
import {Img} from '../../theme/Img';
import {CheckBox} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';

// create a component
const ExpandButton = ({
  navigation,
  onPressGrey,
  onPressOrange,
  onPress,
  value,
  onChangeText,
  placeholder,
  Headertext,
  TextinputViewStyle,
  mainViewStyle,
  ShowRadio,
  ShowPicker,
  CheckedValue,
  onPressOut,
  dropdownOnChange,
  dropdownplaceholder,
  dropdownvalue,
  dropdowndata,
  onConfirmSelectItem,
  width,
  customewidth,
  mainDropdownStyle,
  editdropdownOnChange,
  editdropdowndata,
  editdropdownplaceholder,
  editdropdownvalue,
  showdropDown,
  noleftmar,
}) => {
  const [Show, SetShow] = useState(false);
  const [val, setVal] = React.useState('male');

  return (
    <View style={mainViewStyle}>
      <TouchableOpacity
        onPress={() => {
          SetShow(!Show);
        }}
        style={{flexDirection: 'row', alignItems: 'center'}}
      >
        <Image
          resizeMode="contain"
          style={{
            height: hp(3.5),
            width: hp(3.5),
            marginRight: wp(5),
          }}
          source={Img.plusfill}
        />

        <Text
          style={{
            color: CustomColors.white,
            fontSize: hp(2.2),
          }}
        >
          {Headertext}
        </Text>
      </TouchableOpacity>

      {Show ? (
        <View
          style={[
            {
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: CustomColors.lightbg,
              justifyContent: 'space-between',
              marginTop: hp(2.5),
            },
            TextinputViewStyle,
          ]}
        >
          {ShowRadio ? (
            <Dropdown
              onConfirmSelectItem={onConfirmSelectItem}
              iconStyle={{
                tintColor: 'white',
                // marginRight: 90,
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
                color: 'white',
                fontSize: hp(1.8),
                backgroundColor: CustomColors.lightbg,
              }}
              itemContainerStyle={{
                backgroundColor: CustomColors.white,
              }}
              style={{
                width: customewidth ? width : wp(20),
                marginLeft: wp(5),
                height: hp(6),
              }}
              data={dropdowndata}
              labelField="label"
              valueField="value"
              placeholder={dropdownplaceholder}
              value={dropdownvalue}
              onChange={item => {
                dropdownOnChange(item);
              }}
            />
          ) : (
            <View>
              {showdropDown ? (
                <View>
                  <TextInput
                  maxLength={30}
                  multiline={true}
                    editable={ShowRadio || ShowPicker ? false : true}
                    selectTextOnFocus={ShowRadio || ShowPicker ? false : true}
                    value={value}
                    onChangeText={onChangeText}
                    style={{
                      paddingLeft: wp(5),
                      width: ShowRadio || ShowPicker ? null : wp(45),
                      color: CustomColors.white,
                    }}
                    placeholderTextColor={CustomColors.white}
                    placeholder={placeholder}
                  />

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
                    style={[
                      mainDropdownStyle,
                      {
                        width: customewidth ? width : wp(35),
                        height: hp(6.5),
                        alignSelf: 'flex-start',
                        marginLeft: wp(5),
                      },
                    ]}
                    data={editdropdowndata}
                    labelField="label"
                    valueField="value"
                    placeholder={editdropdownplaceholder}
                    value={editdropdownvalue}
                    onChange={item => {
                      editdropdownOnChange(item);
                    }}
                  />
                </View>
              ) : (
                <TextInput
                  multiline={true}
                  editable={ShowRadio || ShowPicker ? false : true}
                  selectTextOnFocus={ShowRadio || ShowPicker ? false : true}
                  value={value}
                  onChangeText={onChangeText}
                  style={{
                    paddingLeft: wp(5),
                    width: ShowRadio || ShowPicker ? null : wp(50),
                    color: CustomColors.white,
                  }}
                  placeholderTextColor={CustomColors.white}
                  placeholder={placeholder}
                />
              )}
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: wp(2.5),
              marginLeft: wp(-10),
            }}
          >
            {ShowPicker ? (
              <TouchableOpacity onPress={onPress}>
                <Image
                  resizeMode="contain"
                  source={Img.calendar}
                  style={{
                    height: 20,
                    width: 20,
                    marginRight: wp(5),
                  }}
                />
              </TouchableOpacity>
            ) : null}
            <SelectButton
              onPress={onPressGrey}
              TextStyle={{color: CustomColors.black}}
              MainStyle={{backgroundColor: CustomColors.lightGray2}}
              ButtonText={'Cancel'}
            />
            <SelectButton
              onPress={onPressOrange}
              TextStyle={{color: CustomColors.white}}
              MainStyle={{
                backgroundColor: CustomColors.orange,
                marginLeft: wp(2),
              }}
              ButtonText={'Save'}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ExpandButton;

// Dont remove important

{
  /* <CheckBox
              center
              status={checked1 === 'male' ? 'checked' : 'unchecked'}
              onPress={() => {
                
                checked1 === '' ||
                checked1 === 'female' ||
                checked1 === 'other'
                  ? setChecked1('male')
                  : setChecked1('');
              }}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                paddingVertical: 0,
                paddingHorizontal: 0,
              }}
              checked={checked1 === 'male'}
              checkedColor={CustomColors.white}
              uncheckedColor={CustomColors.white}
              size={15}
              title={
                <Text
                  style={{
                    color: CustomColors.white,
                    marginLeft: wp(1),
                    fontSize: 13,
                  }}
                >
                  Male
                </Text>
              }
              //  status={status}
              //  checked={checked}
              uncheckedIcon={
                <Image
                  resizeMode="contain"
                  source={Img.radioempty}
                  style={{
                    height: 14,
                    width: 14,
                    marginLeft: wp(-2),
                    tintColor: CustomColors.white,
                  }}
                />
              }
              checkedIcon={
                <Image
                  resizeMode="contain"
                  source={Img.radiofill}
                  style={{
                    height: 14,
                    width: 14,
                    marginLeft: wp(-2),
                    tintColor: CustomColors.white,
                  }}
                />
              }
              //  onPress={onPress}
            />

            <CheckBox
              center
              status={checked1 === 'female' ? 'checked' : 'unchecked'}
              onPress={() => {
               

                checked1 === '' || checked1 === 'male' || checked1 === 'other'
                  ? setChecked1('female')
                  : setChecked1('');
              }}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                paddingVertical: 0,
                paddingHorizontal: 0,
              }}
              checked={checked1 === 'female'}
              checkedColor={CustomColors.white}
              uncheckedColor={CustomColors.white}
              size={15}
              title={
                <Text
                  style={{
                    color: CustomColors.white,
                    marginLeft: wp(1),
                    fontSize: 13,
                  }}
                >
                  Female
                </Text>
              }
              //  status={status}
              //  checked={checked}
              uncheckedIcon={
                <Image
                  resizeMode="contain"
                  source={Img.radioempty}
                  style={{
                    height: 14,
                    width: 14,
                    marginLeft: wp(-2),
                    tintColor: CustomColors.white,
                  }}
                />
              }
              checkedIcon={
                <Image
                  resizeMode="contain"
                  source={Img.radiofill}
                  style={{
                    height: 14,
                    width: 14,
                    marginLeft: wp(-2),
                    tintColor: CustomColors.white,
                  }}
                />
              }
              //  onPress={onPress}
            />

            <CheckBox
              center
              status={checked1 === 'other' ? 'checked' : 'unchecked'}
              onPress={() => {
               

                checked1 === '' ||
                checked1 === 'male' ||
                checked1 === 'female'
                  ? setChecked1('other')
                  : setChecked1('');
              }}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                paddingVertical: 0,
                paddingHorizontal: 0,
              }}
              checked={checked1 === 'other'}
              checkedColor={CustomColors.white}
              uncheckedColor={CustomColors.white}
              size={15}
              title={
                <Text
                  style={{
                    color: CustomColors.white,
                    marginLeft: wp(1),
                    fontSize: 13,
                  }}
                >
                  Other
                </Text>
              }
              //  status={status}
              //  checked={checked}
              uncheckedIcon={
                <Image
                  resizeMode="contain"
                  source={Img.radioempty}
                  style={{
                    height: 14,
                    width: 14,
                    marginLeft: wp(-2),
                    tintColor: CustomColors.white,
                  }}
                />
              }
              checkedIcon={
                <Image
                  resizeMode="contain"
                  source={Img.radiofill}
                  style={{
                    height: 14,
                    width: 14,
                    marginLeft: wp(-2),
                    tintColor: CustomColors.white,
                  }}
                />
              }
              //  onPress={onPress}
            /> */
}
