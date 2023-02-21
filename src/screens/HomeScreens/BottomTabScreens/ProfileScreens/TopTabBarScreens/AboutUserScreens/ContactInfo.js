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
  KeyboardAvoidingView
} from 'react-native';
import {AuthStyle} from '../../../../../AuthScreens/AuthStyle';
import {CustomColors} from '../../../../../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../../theme/layout';
import {Strings} from '../../../../../../theme/strings';
import {Img} from '../../../../../../theme/Img';
import AboutCard from '../../../../../../components/ProfileScreens/AboutCard';
import {Homestyle} from '../../../../Homestyle';
import SelectButton from '../../../../../../components/ProfileScreens/SelectButton';
import ExpandButton from '../../../../../../components/ProfileScreens/ExpandButton';
import {ProfileStyles} from '../../ProfileStyles';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import BaseURl from '../../../../../../genres/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ButtonsCard from '../../../../../../components/ProfileScreens/ButtonsCard';
import {Dropdown} from 'react-native-element-dropdown';

// create a component

const ContactInfo = ({navigation, route}) => {
  useEffect(() => {
    GetAllData();
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [finalDate, setfinalDate] = useState('');
  const [mobile, setMobile] = useState('');
  const [editmobile, seteditMobile] = useState('');
  const [website, setwebsite] = useState('');
  const [editwebsite, seteditwebsite] = useState('');
  const [email, setemail] = useState('');
  const [religion, setreligion] = useState('');
  const [editreligion, seteditreligion] = useState('');
  const [editemail, seteditemail] = useState('');
  const [language, setlanguage] = useState('');
  const [languageList, setlanguageList] = useState([]);
  const [IsEdit, setIsEdit] = useState('');
  const [Value, SetValue] = useState('');
  const [editgender, setEditgender] = useState('male');

  const data = [
    {label: 'male', value: '1'},
    {label: 'female', value: '2'},
    {label: 'other', value: '3'},
  ];

  const GetAllData = async () => {
    const Id = await AsyncStorage.getItem('UserId');
    await axios
      .get(
        `${BaseURl}api/about/getAboutData?userid=${"63a52e02015f7b1d9ded8803"}`,
      )
      .then(response => {
        SetValue(
          response.data.userData[0].gender
            ? response.data.userData[0].gender
            : '',
        );
        setlanguageList(
          response.data.userData[0].language
            ? response.data.userData[0].language.reverse()
            : '',
        );
        setreligion(
          response.data.userData[0].basicInfo
            ? response.data.userData[0].basicInfo
            : '',
        );
        setfinalDate(
          response.data.userData[0].birthDate
            ? response.data.userData[0].birthDate
            : '',
        );
        setMobile(
          response.data.userData[0].mobileNumber
            ? response.data.userData[0].mobileNumber
            : '',
        );
        setemail(
          response.data.userData[0].address
            ? response.data.userData[0].address
            : '',
        );
        setwebsite(
          response.data.userData[0].website
            ? response.data.userData[0].website
            : '',
        );
        setUserdata(response.data.userData[0]);
        console.log(response.data.userData[0], '==data 1 ===');
      })
      .catch(err => {
        console.log(err);
      });

    await axios
      .get(`${BaseURl}api/user/profile?id=${'63a52e02015f7b1d9ded8803'}`)
      .then(response => {
        setUserdata2(response.data.data);
        console.log(response.data.data, '==data 2==');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateDate = date => {
    const NewDate = moment(date).format('DD/MM/YYYY');
    setSelectedDate(NewDate);
  };

  const SaveData = async field => {
    
    const Id = await AsyncStorage.getItem('UserId');
    const token = AsyncStorage.getItem('LoginToken');

    const formData =
      field === 'mobileNumber'
        ? {mobileNumber: editmobile}
        : field === 'website'
        ? {website: editwebsite}
        : field === 'address'
        ? {address: editemail}
        : field === 'birthDate'
        ? {birthDate: selectedDate}
        : field === 'basicInfo'
        ? {basicInfo: editreligion}
        : field === 'gender'
        ? {gender: editgender}
        : field === 'language'
        ? {
            userId: Id,
            name: language,
            fieldName: field,
          }
        : null;

    setIsEdit('');
    await axios
      .post(
        field === 'language'
          ? `${BaseURl}api/about/addSingleArray`
          : `${BaseURl}api/about/updateAbout`,
        formData,
        {
          headers: {
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MTAwMS5kZHNAZ21haWwuY29tIiwiaWF0IjoxNjc1MzMyNDA1OTE3LCJleHAiOjE2NzU0MTg4MDV9.EeSlk8ou_Y9MlFoKk-rA7ZvYE-cG08WCgwqstrgbEfY",
          },
        },
      )
      .then(response => {
        GetAllData();
        console.log(response.data, formData, '===res===');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const DeleteData = async (field, id) => {
    
    const token = AsyncStorage.getItem('LoginToken');
    console.log(token);
    const formData =
      field === 'mobileNumber'
        ? {mobileNumber: editmobile}
        : field === 'website'
        ? {website: editwebsite}
        : field === 'address'
        ? {address: editemail}
        : field === 'birthDate'
        ? {birthDate: selectedDate}
        : field === 'basicInfo'
        ? {basicInfo: editreligion}
        : field === 'gender'
        ? {gender: Value}
        : field === 'language'
        ? {
            dataId: id,
            userId: '63a52e02015f7b1d9ded8803',
            fieldName: field,
          }
        : null;
    await axios
      .post(
        field === 'language'
          ? `${BaseURl}api/about/deleteSingleArray`
          : `${BaseURl}api/about/deleteAbout`,
        formData,
        {
          headers: {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MTAwMS5kZHNAZ21haWwuY29tIiwiaWF0IjoxNjc1MzMyNDA1OTE3LCJleHAiOjE2NzU0MTg4MDV9.EeSlk8ou_Y9MlFoKk-rA7ZvYE-cG08WCgwqstrgbEfY",
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
          <Text style={ProfileStyles.menumaintext}>{Strings.contactNinfo}</Text>
          <KeyboardAvoidingView
            behavior="padding"
            style={{width: '100%', flexGrow: 1}}
            contentContainerStyle={{paddingBottom: hp(90)}}
          >
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(15)}}
            style={{flex: 1}}
          >
            <View style={{width: wp(90), alignSelf: 'center'}}>
              <Text style={ProfileStyles.menuheadertext}>
                {Strings.contactinfo}
              </Text>
              {mobile === '' ? (
                <ExpandButton
                  onPressOrange={() => {
                    editmobile === ''
                      ? alert('Insert Data')
                      : SaveData('mobileNumber');
                  }}
                  value={editmobile}
                  onChangeText={value => {
                    seteditMobile(value);
                  }}
                  Headertext={Strings.addmobile}
                  placeholder={Strings.addmobile}
                />
              ) : (
                <View>
                  <ButtonsCard
                    isIcon
                    source={Img.telephone}
                    customColor
                    color={
                      IsEdit === 'mobile'
                        ? CustomColors.black
                        : CustomColors.white
                    }
                    value={IsEdit === 'mobile' ? `${editmobile}` : `${mobile}`}
                    onChangeText={value => {
                      seteditMobile(value);
                    }}
                    onPressOrange={() => {
                      IsEdit === 'mobile'
                        ? setIsEdit('')
                        : DeleteData('mobileNumber');
                    }}
                    onPressGrey={() => {
                      IsEdit === 'mobile'
                        ? editmobile === ''
                          ? alert('Insert Data')
                          : SaveData('mobileNumber')
                        : (seteditMobile(mobile), setIsEdit('mobile'));
                    }}
                    editable={IsEdit === 'mobile' ? true : false}
                    GreyText={IsEdit === 'mobile' ? 'Save' : Strings.edit}
                    OrangeText={IsEdit === 'mobile' ? 'Cancel' : Strings.delete}
                    placeholder={'Enter Mobile Number'}
                    MainViewStyle={{
                      width: wp(90),

                      backgroundColor:
                        IsEdit === 'mobile'
                          ? CustomColors.white
                          : CustomColors.lightbg,
                    }}
                  />
                </View>
              )}
              {email === '' ? (
                <ExpandButton
                  onPressOrange={() => {
                    SaveData('address');
                  }}
                  value={editwebsite}
                  onChangeText={value => {
                    seteditemail(value);
                  }}
                  mainViewStyle={{marginTop: hp(2.5)}}
                  Headertext={Strings.addemail}
                  placeholder={Strings.addemail}
                />
              ) : (
                <View>
                  <ButtonsCard
                    isIcon
                    source={Img.email}
                    customColor
                    color={
                      IsEdit === 'address'
                        ? CustomColors.black
                        : CustomColors.white
                    }
                    value={IsEdit === 'address' ? `${editemail}` : `${email}`}
                    onChangeText={value => {
                      seteditemail(value);
                    }}
                    onPressOrange={() => {
                      IsEdit === 'address'
                        ? setIsEdit('')
                        : DeleteData('address');
                    }}
                    onPressGrey={() => {
                      IsEdit === 'address'
                        ? SaveData('address')
                        : (seteditemail(email), setIsEdit('address'));
                    }}
                    editable={IsEdit === 'address' ? true : false}
                    GreyText={IsEdit === 'address' ? 'Save' : Strings.edit}
                    OrangeText={
                      IsEdit === 'address' ? 'Cancel' : Strings.delete
                    }
                    placeholder={'Enter Email Address'}
                    MainViewStyle={{
                      marginTop: hp(2.5),
                      width: wp(90),
                      backgroundColor:
                        IsEdit === 'address'
                          ? CustomColors.white
                          : CustomColors.lightbg,
                    }}
                  />
                </View>
              )}
              <Text style={ProfileStyles.menuheadertext}>
                {Strings.websitelinks}
              </Text>
              {website === '' ? (
                <ExpandButton
                  onPressOrange={() => {
                    SaveData('website');
                  }}
                  value={editwebsite}
                  onChangeText={value => {
                    seteditwebsite(value);
                  }}
                  Headertext={Strings.addwebsite}
                  placeholder={Strings.addwebsite}
                />
              ) : (
                <View>
                  <ButtonsCard
                    isIcon
                    source={Img.url}
                    customColor
                    color={
                      IsEdit === 'website'
                        ? CustomColors.black
                        : CustomColors.white
                    }
                    value={
                      IsEdit === 'website' ? `${editwebsite}` : `${website}`
                    }
                    onChangeText={value => {
                      seteditwebsite(value);
                    }}
                    onPressOrange={() => {
                      IsEdit === 'website'
                        ? setIsEdit('')
                        : DeleteData('website');
                    }}
                    onPressGrey={() => {
                      IsEdit === 'website'
                        ? SaveData('website')
                        : (seteditwebsite(website), setIsEdit('website'));
                    }}
                    editable={IsEdit === 'website' ? true : false}
                    GreyText={IsEdit === 'website' ? 'Save' : Strings.edit}
                    OrangeText={
                      IsEdit === 'website' ? 'Cancel' : Strings.delete
                    }
                    placeholder={'Enter Website'}
                    MainViewStyle={{
                      width: wp(90),
                      backgroundColor:
                        IsEdit === 'website'
                          ? CustomColors.white
                          : CustomColors.lightbg,
                    }}
                  />
                </View>
              )}
              <Text style={ProfileStyles.menuheadertext}>
                {Strings.basicinfo}
              </Text>
              {religion === '' ? (
                <ExpandButton
                  onPressOrange={() => {
                    SaveData('basicInfo');
                  }}
                  value={editreligion}
                  onChangeText={value => {
                    seteditreligion(value);
                  }}
                  Headertext={Strings.addreligios}
                  placeholder={Strings.addreligios}
                />
              ) : (
                <View>
                  <ButtonsCard
                    isIcon
                    source={Img.prayer}
                    customColor
                    color={
                      IsEdit === 'basicInfo'
                        ? CustomColors.black
                        : CustomColors.white
                    }
                    value={
                      IsEdit === 'basicInfo' ? `${editreligion}` : `${religion}`
                    }
                    onChangeText={value => {
                      seteditreligion(value);
                    }}
                    onPressOrange={() => {
                      IsEdit === 'basicInfo'
                        ? setIsEdit('')
                        : DeleteData('basicInfo');
                    }}
                    onPressGrey={() => {
                      IsEdit === 'basicInfo'
                        ? SaveData('basicInfo')
                        : (seteditreligion(religion), setIsEdit('basicInfo'));
                    }}
                    editable={IsEdit === 'basicInfo' ? true : false}
                    GreyText={IsEdit === 'basicInfo' ? 'Save' : Strings.edit}
                    OrangeText={
                      IsEdit === 'basicInfo' ? 'Cancel' : Strings.delete
                    }
                    placeholder={'Enter Religiouse Views'}
                    MainViewStyle={{
                      width: wp(90),
                      backgroundColor:
                        IsEdit === 'basicInfo'
                          ? CustomColors.white
                          : CustomColors.lightbg,
                    }}
                  />
                </View>
              )}

              {Value === '' ? (
                <ExpandButton
                  onPressOrange={() => {
                    SaveData('gender');
                  }}
                  dropdowndata={data}
                  dropdownplaceholder={editgender}
                  dropdownvalue={editgender}
                  dropdownOnChange={item => {
                    setEditgender(item.label);
                  }}
                  ShowRadio
                  mainViewStyle={{marginTop: hp(2.5)}}
                  Headertext={Strings.addgender}
                  placeholder={Strings.selectgender}
                />
              ) : (
                <View>
                  <ButtonsCard
                    isEditGender ={IsEdit === 'gender' ? true : false}
                    isIcon
                    source={Img.gender}
                    customColor
                    value={`${Value}`}
                    color={
                      IsEdit === 'gender'
                        ? CustomColors.black
                        : CustomColors.white
                    }
                    editdropdowndata={data}
                    editdropdownplaceholder={
                      IsEdit === 'gender' ? `${editgender}` : `${Value}`
                    }
                    editdropdownvalue={
                      IsEdit === 'gender' ? `${editgender}` : `${Value}`
                    }
                    editdropdownOnChange={item => {
                      setEditgender(item.label);
                    }}
                    onPressOrange={() => {
                      IsEdit === 'gender'
                        ? setIsEdit('')
                        : DeleteData('gender');
                    }}
                    onPressGrey={() => {
                      IsEdit === 'gender'
                        ? SaveData('gender')
                        : (setEditgender(Value), setIsEdit('gender'));
                    }}
                    editable={IsEdit === 'gender' ? true : false}
                    GreyText={IsEdit === 'gender' ? 'Save' : Strings.edit}
                    OrangeText={IsEdit === 'gender' ? 'Cancel' : Strings.delete}
                    placeholder={'Enter gender'}
                    MainViewStyle={{
                      width: wp(90),
                      marginTop: hp(2.5),
                   
                    }}
                  />
                </View>
              )}
              {finalDate === '' ? (
                <ExpandButton
                  onPressOrange={() => {
                    SaveData('birthDate');
                  }}
                  onPress={() => {
                    setOpen(true);
                  }}
                  ShowPicker
                  mainViewStyle={{marginTop: hp(2.5)}}
                  Headertext={Strings.addbirth}
                  placeholder={
                    selectedDate === '' ? Strings.enterdate : selectedDate
                  }
                />
              ) : (
                <View>
                  <ButtonsCard
                    isIcon
                    source={Img.calendar}
                    value={IsEdit === 'birthDate' ? selectedDate : finalDate}
                    onPressOrange={() => {
                      IsEdit === 'birthDate'
                        ? setIsEdit('')
                        : (DeleteData('birthDate'), setSelectedDate(''));
                    }}
                    onPressGrey={() => {
                      IsEdit === 'birthDate'
                        ? SaveData('birthDate')
                        : (setIsEdit('birthDate'), setOpen(true));

                    }}
                    GreyText={IsEdit === 'birthDate' ? 'Save' : Strings.edit}
                    OrangeText={
                      IsEdit === 'birthDate' ? 'Cancel' : Strings.delete
                    }
                    placeholder={'Select date'}
                    MainViewStyle={{
                      color: 'white',
                      marginTop: hp(2.5),
                      width: wp(90),
                    }}
                  />
                </View>
              )}
              <DatePicker
                modal
                mode="date"
                open={open}
                date={new Date()}
                onConfirm={date => {
                  setOpen(false);
                  updateDate(date);
                }}
                onCancel={() => {
                  setIsEdit('');
                  setOpen(false);
                }}
              />
              <ExpandButton
                onPressOrange={() => {
                  SaveData('language');
                }}
                onPress={() => {
                  setOpen(true);
                }}
                value={language}
                onChangeText={value => {
                  setlanguage(value);
                }}
                mainViewStyle={{marginTop: hp(2.5)}}
                Headertext={Strings.addlang}
                placeholder={Strings.addlang}
              />
              {languageList.map(item => (
                <View>
                  <ButtonsCard
                    hidegreybutton
                    isIcon
                    source={Img.language}
                    customColor
                    color={CustomColors.white}
                    value={item.name}
                    onChangeText={value => {
                      seteditreligion(value);
                    }}
                    onPressOrange={() => {
                      IsEdit === 'language'
                        ? setIsEdit('')
                        : DeleteData('language', item._id);
                    }}
                    OrangeText={Strings.delete}
                    placeholder={'Add Language'}
                    MainViewStyle={{
                      width: wp(90),
                      marginTop: hp(2.5),
                    }}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles

//make this component available to the app
export default ContactInfo;
