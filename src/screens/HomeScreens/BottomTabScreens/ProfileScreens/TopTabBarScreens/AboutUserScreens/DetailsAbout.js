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
  KeyboardAvoidingView,
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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseURl from '../../../../../../genres/BaseUrl';
import ButtonsCard from '../../../../../../components/ProfileScreens/ButtonsCard';

// create a component
const DetailsAbout = ({navigation}) => {
  useEffect(() => {
    GetAllData();
  }, []);

  const [IsEdit, setIsEdit] = useState('');
  const [about, setAbout] = useState('');
  const [editabout, setEditabout] = useState('');
  const [nameprn, setNameprn] = useState('');
  const [editnameprn, setEditnameprn] = useState('');
  const [nickname, setNickname] = useState('');
  const [editnickname, seteditnickname] = useState('');
  const [quote, setQuote] = useState('');
  const [editquote, setEditquote] = useState('');

  const GetAllData = async () => {
    const Id = await AsyncStorage.getItem('UserId');
    await axios
      .get(
        `${BaseURl}api/about/getAboutData?userid=${'63a52e02015f7b1d9ded8803'}`,
      )
      .then(response => {
        console.log(response.data.userData[0]);
        setAbout(
          response.data.userData[0].aboutYourself
            ? response.data.userData[0].aboutYourself
            : '',
        );
        setNameprn(
          response.data.userData[0].pronunciation
            ? response.data.userData[0].pronunciation
            : '',
        );
        setNickname(
          response.data.userData[0].otherName
            ? response.data.userData[0].otherName
            : '',
        );
        setQuote(
          response.data.userData[0].quote
            ? response.data.userData[0].quote
            : '',
        );
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

  const SaveData = async field => {
    const Id = await AsyncStorage.getItem('UserId');
    const token = AsyncStorage.getItem('LoginToken');

    const formData =
      field === 'aboutYourself'
        ? {aboutYourself: editabout}
        : field === 'pronunciation'
        ? {pronunciation: editnameprn}
        : field === 'otherName'
        ? {otherName: editnickname}
        : field === 'quote'
        ? {quote: editquote}
        : null;

    setIsEdit('');
    await axios
      .post(`${BaseURl}api/about/updateAbout`, formData, {
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MTAwMS5kZHNAZ21haWwuY29tIiwiaWF0IjoxNjc1NjU5MDc4MDczLCJleHAiOjE2NzU3NDU0Nzh9.ZDF7EeMS6rzhewPFKWwwL14_P0UVMJ7GoTyqCBThwAs',
        },
      })
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

    const formData =
      field === 'aboutYourself'
        ? {aboutYourself: editabout}
        : field === 'pronunciation'
        ? {pronunciation: editnameprn}
        : field === 'otherName'
        ? {otherName: editnickname}
        : field === 'quote'
        ? {quote: editquote}
        : null;
    await axios
      .post(`${BaseURl}api/about/deleteAbout`, formData, {
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MTAwMS5kZHNAZ21haWwuY29tIiwiaWF0IjoxNjc1NjU5MDc4MDczLCJleHAiOjE2NzU3NDU0Nzh9.ZDF7EeMS6rzhewPFKWwwL14_P0UVMJ7GoTyqCBThwAs',
        },
      })
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
          <Text style={ProfileStyles.menumaintext}>{Strings.detailsabout}</Text>
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
                  {Strings.aboutyou}
                </Text>
                {about === '' ? (
                  <ExpandButton
                    onPressOrange={() => {
                      editabout === ''
                        ? alert('Please Insert Data')
                        : SaveData('aboutYourself');
                    }}
                    value={editabout}
                    onChangeText={value => {
                      setEditabout(value);
                    }}
                    Headertext={Strings.writedetails}
                    placeholder={Strings.writeyourdet}
                  />
                ) : (
                  <View>
                    <ButtonsCard
                      customColor
                      color={
                        IsEdit === 'aboutYourself'
                          ? CustomColors.black
                          : CustomColors.white
                      }
                      value={
                        IsEdit === 'aboutYourself' ? `${editabout}` : `${about}`
                      }
                      onChangeText={value => {
                        setEditabout(value);
                      }}
                      onPressOrange={() => {
                        IsEdit === 'aboutYourself'
                          ? setIsEdit('')
                          : DeleteData('aboutYourself');
                      }}
                      onPressGrey={() => {
                        IsEdit === 'aboutYourself'
                          ? editabout === ''
                            ? alert('Insert Data')
                            : SaveData('aboutYourself')
                          : (setEditabout(about), setIsEdit('aboutYourself'));
                      }}
                      editable={IsEdit === 'aboutYourself' ? true : false}
                      GreyText={
                        IsEdit === 'aboutYourself' ? 'Save' : Strings.edit
                      }
                      OrangeText={
                        IsEdit === 'aboutYourself' ? 'Cancel' : Strings.delete
                      }
                      placeholder={'Enter About info'}
                      MainViewStyle={{
                        width: wp(90),

                        backgroundColor:
                          IsEdit === 'aboutYourself'
                            ? CustomColors.white
                            : CustomColors.lightbg,
                      }}
                    />
                  </View>
                )}

                <Text style={ProfileStyles.menuheadertext}>
                  {Strings.namespron}
                </Text>

                {nameprn === '' ? (
                  <ExpandButton
                    onPressOrange={() => {
                      editnameprn === ''
                        ? alert('Please Insert Data')
                        : SaveData('pronunciation');
                    }}
                    value={editnameprn}
                    onChangeText={value => {
                      setEditnameprn(value);
                    }}
                    Headertext={Strings.addnamepron}
                    placeholder={Strings.addnamepron}
                  />
                ) : (
                  <View>
                    <ButtonsCard
                      customColor
                      color={
                        IsEdit === 'pronunciation'
                          ? CustomColors.black
                          : CustomColors.white
                      }
                      value={
                        IsEdit === 'pronunciation'
                          ? `${editnameprn}`
                          : `${nameprn}`
                      }
                      onChangeText={value => {
                        setEditnameprn(value);
                      }}
                      onPressOrange={() => {
                        IsEdit === 'pronunciation'
                          ? setIsEdit('')
                          : DeleteData('pronunciation');
                      }}
                      onPressGrey={() => {
                        IsEdit === 'pronunciation'
                          ? editnameprn === ''
                            ? alert('Please Insert Data')
                            : SaveData('pronunciation')
                          : (setEditnameprn(nameprn),
                            setIsEdit('pronunciation'));
                      }}
                      editable={IsEdit === 'pronunciation' ? true : false}
                      GreyText={
                        IsEdit === 'pronunciation' ? 'Save' : Strings.edit
                      }
                      OrangeText={
                        IsEdit === 'pronunciation' ? 'Cancel' : Strings.delete
                      }
                      placeholder={'Enter Name Pronunciation'}
                      MainViewStyle={{
                        width: wp(90),
                        backgroundColor:
                          IsEdit === 'pronunciation'
                            ? CustomColors.white
                            : CustomColors.lightbg,
                      }}
                    />
                  </View>
                )}
                <Text style={ProfileStyles.menuheadertext}>
                  {Strings.othername}
                </Text>

                {nickname === '' ? (
                  <ExpandButton
                    onPressOrange={() => {
                      editnickname === ''
                        ? alert('Please Insert Data')
                        : SaveData('otherName');
                    }}
                    value={editnickname}
                    onChangeText={value => {
                      seteditnickname(value);
                    }}
                    Headertext={Strings.addnickname}
                    placeholder={Strings.addyournickname}
                  />
                ) : (
                  <View>
                    <ButtonsCard
                      customColor
                      color={
                        IsEdit === 'otherName'
                          ? CustomColors.black
                          : CustomColors.white
                      }
                      value={
                        IsEdit === 'otherName'
                          ? `${editnickname}`
                          : `${nickname}`
                      }
                      onChangeText={value => {
                        seteditnickname(value);
                      }}
                      onPressOrange={() => {
                        IsEdit === 'otherName'
                          ? setIsEdit('')
                          : DeleteData('otherName');
                      }}
                      onPressGrey={() => {
                        IsEdit === 'otherName'
                          ? editnickname === ''
                            ? alert('Please Insert Data')
                            : SaveData('otherName')
                          : (seteditnickname(nickname), setIsEdit('otherName'));
                      }}
                      editable={IsEdit === 'otherName' ? true : false}
                      GreyText={IsEdit === 'otherName' ? 'Save' : Strings.edit}
                      OrangeText={
                        IsEdit === 'otherName' ? 'Cancel' : Strings.delete
                      }
                      placeholder={'Enter Your Nickname'}
                      MainViewStyle={{
                        width: wp(90),

                        backgroundColor:
                          IsEdit === 'otherName'
                            ? CustomColors.white
                            : CustomColors.lightbg,
                      }}
                    />
                  </View>
                )}

                <Text style={ProfileStyles.menuheadertext}>
                  {Strings.favquotes}
                </Text>

                {quote === '' ? (
                  <ExpandButton
                    onPressOrange={() => {
                      editquote === ''
                        ? alert('Please Insert Data')
                        : SaveData('quote');
                    }}
                    value={editquote}
                    onChangeText={value => {
                      setEditquote(value);
                    }}
                    Headertext={Strings.addquote}
                    placeholder={Strings.addquote}
                  />
                ) : (
                  <View>
                    <ButtonsCard
                      customColor
                      color={
                        IsEdit === 'quote'
                          ? CustomColors.black
                          : CustomColors.white
                      }
                      value={IsEdit === 'quote' ? `${editquote}` : `${quote}`}
                      onChangeText={value => {
                        setEditquote(value);
                      }}
                      onPressOrange={() => {
                        IsEdit === 'quote'
                          ? setIsEdit('')
                          : DeleteData('quote');
                      }}
                      onPressGrey={() => {
                        IsEdit === 'quote'
                          ? editquote === ''
                            ? alert('Please Insert Data')
                            : SaveData('quote')
                          : (setEditquote(quote), setIsEdit('quote'));
                      }}
                      editable={IsEdit === 'quote' ? true : false}
                      GreyText={IsEdit === 'quote' ? 'Save' : Strings.edit}
                      OrangeText={
                        IsEdit === 'quote' ? 'Cancel' : Strings.delete
                      }
                      placeholder={'Enter Quote Here...'}
                      MainViewStyle={{
                        width: wp(90),

                        backgroundColor:
                          IsEdit === 'quote'
                            ? CustomColors.white
                            : CustomColors.lightbg,
                      }}
                    />
                  </View>
                )}
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
export default DetailsAbout;
