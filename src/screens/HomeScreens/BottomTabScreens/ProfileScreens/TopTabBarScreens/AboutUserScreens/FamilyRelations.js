//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {AuthStyle} from '../../../../../AuthScreens/AuthStyle';
import {CustomColors} from '../../../../../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../../theme/layout';
import {Strings} from '../../../../../../theme/strings';
import {Img} from '../../../../../../theme/Img';
import {Homestyle} from '../../../../Homestyle';
import ExpandButton from '../../../../../../components/ProfileScreens/ExpandButton';
import {ProfileStyles} from '../../ProfileStyles';
import BaseURl from '../../../../../../genres/BaseUrl';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonsCard from '../../../../../../components/ProfileScreens/ButtonsCard';
import {Avatar} from 'react-native-elements';
import SelectButton from '../../../../../../components/ProfileScreens/SelectButton';
import FamilyCard from '../../../../../../components/ProfileScreens/FamilyCard';
import {Dropdown} from 'react-native-element-dropdown';

// create a component

const FamilyRelations = ({navigation}) => {
  useEffect(() => {
    GetAllData();
  }, []);

  const [IsEdit, setIsEdit] = useState('');
  const [relstatus, setRelstatus] = useState('');
  const [editrelstatus, setEditrelstatus] = useState('');
  const [family, setFamily] = useState('');
  const [editfamily, seteditfamily] = useState('');
  const [familyrel, setfamilyrel] = useState('');
  const [editfamilyrel, seteditfamilyrel] = useState('');
  const [allFamily, setAllfamily] = useState([]);

  const data = [
    {label: 'Single', value: '1'},
    {label: 'In a Relationship', value: '2'},
    {label: 'Engaged', value: '3'},
    {label: 'Married', value: '4'},
  ];

  const relations = [
    {label: 'Father', value: '1'},
    {label: 'Mother', value: '1'},
    {label: 'Brother', value: '1'},
    {label: 'Sister', value: '1'},
    {label: 'Aunt', value: '1'},
    {label: 'Grand Father', value: '1'},
    {label: 'Grand Mother', value: '1'},
    {label: 'Daughter', value: '1'},
    {label: 'Son', value: '1'},
  ];

  const GetAllData = async () => {
    const Id = await AsyncStorage.getItem('UserId');
    await axios
      .get(
        `${BaseURl}api/about/getAboutData?userid=${'63a52e02015f7b1d9ded8803'}`,
      )
      .then(response => {
        setAllfamily(
          response.data.userData[0].family
            ? response.data.userData[0].family.reverse()
            : '',
        );
        setRelstatus(
          response.data.userData[0].relationshipStatus
            ? response.data.userData[0].relationshipStatus
            : '',
        );

        console.log(allFamily, '===allfamily==');

        console.log(JSON.stringify(response.data), '====data====');
      })
      .catch(err => {
        console.log(err);
      });

    await axios
      .get(`${BaseURl}api/user/profile?id=${'63a52e02015f7b1d9ded8803'}`)
      .then(response => {
        console.log(response.data.data, '==data 2==');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const SaveData = async (field,id) => {
    setIsEdit('');

    const Id = await AsyncStorage.getItem('UserId');
    const token = AsyncStorage.getItem('LoginToken');

    const formData =
      field === 'relationshipStatus'
        ? {relationshipStatus: editrelstatus}
        : field === 'family'
        ? {
            userId: '63a52e02015f7b1d9ded8803',
            name: editfamily,
            relationship: editfamilyrel,
          }
        : field === 'editfamily'
        ? {
            userId: '63a52e02015f7b1d9ded8803',
            dataId: id,
            name: editfamily,
            relationship: editfamilyrel,
          }
        : null;

    await axios
      .post(
        field === 'relationshipStatus'
          ? `${BaseURl}api/about/updateAbout`
          : `${BaseURl}api/about/addFamilyMember`,
        formData,
        {
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MTAwMS5kZHNAZ21haWwuY29tIiwiaWF0IjoxNjc1MzMyNDA1OTE3LCJleHAiOjE2NzU0MTg4MDV9.EeSlk8ou_Y9MlFoKk-rA7ZvYE-cG08WCgwqstrgbEfY',
          },
        },
      )
      .then(response => {
        GetAllData();
        console.log(response.data, formData, '===res===');
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const DeleteData = async (field, id) => {
    const token = AsyncStorage.getItem('LoginToken');

    const formData =
      field === 'relationshipStatus'
        ? {
            relationshipStatus: relstatus,
          }
        : field === 'family'
        ? {
            userId: '63a52e02015f7b1d9ded8803',
            dataId: id,
          }
        : null;

    await axios
      .post(
        field === 'relationshipStatus'
          ? `${BaseURl}api/about/deleteAbout`
          : `${BaseURl}api/about/deleteFamilyMember`,
        formData,
        {
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MTAwMS5kZHNAZ21haWwuY29tIiwiaWF0IjoxNjc1MzExNTU3NTg1LCJleHAiOjE2NzUzOTc5NTd9.JzKIzqvg2CS2yPKNRBxVExCs14f49c0cqfWNjHcAR4k',
          },
        },
      )
      .then(response => {
        GetAllData();
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={AuthStyle.bgcolor}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={ProfileStyles.backimgview}
        >
          <Image
            resizeMode="contain"
            style={ProfileStyles.backimg}
            source={Img.backarrow}
          />
        </TouchableOpacity>

        <View style={Homestyle.MainCurvedCard}>
          <Text style={ProfileStyles.menumaintext}>{Strings.FandR}</Text>
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(15)}}
            style={{flex: 1}}
          >
            <View style={{width: wp(90), alignSelf: 'center'}}>
              <Text style={ProfileStyles.menuheadertext}>
                {Strings.relationship}
              </Text>

              {relstatus === '' ? (
                <ExpandButton
                  ShowRadio
                  dropdowndata={data}
                  dropdownplaceholder={
                    editrelstatus === '' ? 'select item' : editrelstatus
                  }
                  dropdownvalue={editrelstatus}
                  dropdownOnChange={item => {
                    setEditrelstatus(item.label);
                  }}
                  customewidth
                  width={wp(35)}
                  onPressOrange={() => {
                    SaveData('relationshipStatus');
                  }}
                  Headertext={Strings.addrelation}
                  placeholder={Strings.addrelation}
                />
              ) : (
                <View>
                  <ButtonsCard
                    noleftmar
                    mainDropdownStyle={{marginLeft: 20}}
                    customwidth
                    width={wp(35)}
                    isEditGender={
                      IsEdit === 'relationshipStatus' ? true : false
                    }
                    isIcon
                    source={Img.gender}
                    customColor
                    value={`${relstatus}`}
                    color={
                      IsEdit === 'relationshipStatus'
                        ? CustomColors.black
                        : CustomColors.white
                    }
                    editdropdowndata={data}
                    editdropdownplaceholder={
                      IsEdit === 'relationshipStatus'
                        ? `${
                            editrelstatus === '' ? 'select item' : editrelstatus
                          }`
                        : `${relstatus}`
                    }
                    editdropdownvalue={
                      IsEdit === 'relationshipStatus'
                        ? `${editrelstatus}`
                        : `${relstatus}`
                    }
                    editdropdownOnChange={item => {
                      setEditrelstatus(item.label);
                    }}
                    onPressOrange={() => {
                      IsEdit === 'relationshipStatus'
                        ? setIsEdit('')
                        : DeleteData('relationshipStatus');
                    }}
                    onPressGrey={() => {
                      IsEdit === 'relationshipStatus'
                        ? SaveData('relationshipStatus')
                        : (setEditrelstatus(relstatus),
                          setIsEdit('relationshipStatus'));
                    }}
                    editable={IsEdit === 'relationshipStatus' ? true : false}
                    GreyText={
                      IsEdit === 'relationshipStatus' ? 'Save' : Strings.edit
                    }
                    OrangeText={
                      IsEdit === 'relationshipStatus'
                        ? 'Cancel'
                        : Strings.delete
                    }
                    placeholder={'Enter relationshipStatus'}
                    MainViewStyle={{
                      width: wp(90),
                    }}
                  />
                </View>
              )}

              <Text style={ProfileStyles.menuheadertext}>
                {Strings.familymen}
              </Text>

              <ExpandButton
                value={editfamily}
                onChangeText={value => {
                  seteditfamily(value);
                }}
                showdropDown
                editdropdowndata={relations}
                editdropdownplaceholder={
                  editfamilyrel === '' ? 'select item' : editfamilyrel
                }
                editdropdownvalue={editfamilyrel}
                editdropdownOnChange={item => {
                  seteditfamilyrel(item.label);
                }}
                customewidth
                width={wp(35)}
                onPressOrange={() => {
                  SaveData('family');
                }}
                onPressGrey={()=>{
                  seteditfamilyrel('');
                }}
                Headertext={Strings.addfamily}
                placeholder={Strings.addfamilyname}
              />

              {allFamily.map(item =>
                family === item._id ? (
                  <View
                    style={{
                      borderRadius: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: CustomColors.lightbg,
                      justifyContent: 'space-between',
                      marginTop: hp(2.5),
                    }}
                  >
                    <View>
                      <View>
                        <TextInput
                          multiline={true}
                          value={editfamily}
                          onChangeText={value => {
                            seteditfamily(value);
                          }}
                          style={{
                            paddingLeft: wp(5),
                            width: wp(45),
                            color: CustomColors.white,
                          }}
                          placeholderTextColor={CustomColors.white}
                          placeholder={Strings.addfamilyname}
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
                          style={{
                            width: wp(35),
                            height: hp(6.5),
                            alignSelf: 'flex-start',
                            marginLeft: wp(5),
                          }}
                          data={relations}
                          labelField="label"
                          valueField="value"
                          placeholder={editfamilyrel}
                          value={editfamilyrel}
                          onChange={item => {
                            seteditfamilyrel(item);
                            console.log(item);
                          }}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: wp(2.5),
                        marginLeft: wp(-10),
                      }}
                    >
                      <SelectButton
                        onPress={() => {
                          setFamily('');
                          seteditfamilyrel('');
                          seteditfamily('');
                        }}
                        TextStyle={{color: CustomColors.black}}
                        MainStyle={{backgroundColor: CustomColors.lightGray2}}
                        ButtonText={'Cancel'}
                      />
                      <SelectButton
                        onPress={() => {
                          SaveData('editfamily',item._id);
                        }}
                        TextStyle={{color: CustomColors.white}}
                        MainStyle={{
                          backgroundColor: CustomColors.orange,
                          marginLeft: wp(2),
                        }}
                        ButtonText={'Save'}
                      />
                    </View>
                  </View>
                ) : (
                  <FamilyCard
                    onPressOrange={() => {
                      DeleteData('family', item._id);
                    }}
                    memberName={item.name}
                    memberRelation={item.relationship}
                    onPressGrey={() => {
                      setFamily(item._id);
                      seteditfamilyrel(item.relationship);
                      seteditfamily(item.name);
                      console.log(item.name);
                    }}
                  />
                ),
              )}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles

//make this component available to the app
export default FamilyRelations;
