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
import BaseURl from '../../../../../../genres/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonsCard from '../../../../../../components/ProfileScreens/ButtonsCard';

const PlaceLived = ({navigation}) => {
  useEffect(() => {
    GetOverviewdata();
  }, []);

  const GetOverviewdata = async () => {
    const Id = await AsyncStorage.getItem('UserId');
    await axios
      .get(`${BaseURl}api/about/getAboutData?userid=${Id}`)
      .then(response => {
        setHometown(
          response.data.userData[0].homeTown
            ? response.data.userData[0].homeTown
            : '',
        );
        console.log(response.data.userData[0].homeTown, '===hometown===');
      })
      .catch(err => {
        console.log(err);
      });

    await axios
      .get(`${BaseURl}api/user/profile?id=${Id}`)
      .then(response => {
        setGetcity(response.data.data.city);
        console.log(response.data.data, '==data==');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const Savehometown = async () => {
    const formdata = {homeTown: newHometown};

    const token = AsyncStorage.getItem('LoginToken');

    newHometown === ''
      ? alert('please insert data')
      : await axios
          .post(`${BaseURl}api/about/updateAbout`, formdata, {
            headers: {
              token: token,
            },
          })
          .then(response => {
            GetOverviewdata();
            console.log(response.data, '===res===');
          })
          .catch(error => {
            console.log(error.response.data);
          });
  };

  const Editdata = async () => {
    const token = AsyncStorage.getItem('LoginToken');

    const FormData = {
      homeTown: newHometown,
    };

    await axios
      .post(`${BaseURl}api/about/updateAbout`, FormData, {
        headers: {
          token: token,
        },
      })
      .then(response => {
        setActiveIndex(false);
        console.log(response.data, '==edit res==');
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const DeleteData = async () => {
    const token = AsyncStorage.getItem('LoginToken');

    const FormData = {
      homeTown: Hometown,
    };

    await axios
      .post(`${BaseURl}api/about/deleteAbout`, FormData, {
        headers: {
          token: token,
        },
      })
      .then(response => {
        setHometown('');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const [Hometown, setHometown] = useState('');
  const [Getcity, setGetcity] = useState('');
  const [newHometown, setnewHometown] = useState('');
  const [ActiveIndex, setActiveIndex] = useState(false);
  const [Show, SetShow] = useState(false);

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
          <Text style={ProfileStyles.menumaintext}>{Strings.placedlive}</Text>
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(15)}}
            style={{flex: 1}}
          >
            <View style={{marginLeft: wp(5)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={ProfileStyles.locationImgavtar}>
                  <Image
                    resizeMode="contain"
                    style={{height: hp(2.7), width: hp(2.7)}}
                    source={Img.building}
                  />
                </View>
                <View style={{marginLeft: wp(5)}}>
                  <Text
                    style={{
                      color: CustomColors.white,
                      fontSize: hp(2.4),
                    }}
                  >
                    {Strings.currentcity}
                  </Text>
                  <Text
                    style={{
                      color: CustomColors.white,
                      fontSize: hp(2),
                    }}
                  >
                    {Getcity}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: hp(2.5),
                }}
              >
                <View style={ProfileStyles.locationImgavtar}>
                  <Image
                    resizeMode="contain"
                    style={{height: hp(2.7), width: hp(2.7)}}
                    source={Img.building}
                  />
                </View>
                <View style={{marginLeft: wp(5)}}>
                  <Text
                    style={{
                      color: CustomColors.white,
                      fontSize: hp(2.4),
                    }}
                  >
                    {Strings.hometw}
                  </Text>
                </View>
              </View>

              {Hometown === '' || Show ? (
                <ExpandButton
                  onPressOrange={() => {
                    Savehometown();
                    SetShow(false);
                  }}
                  value={newHometown}
                  onChangeText={value => {
                    setnewHometown(value);
                  }}
                  TextinputViewStyle={{width: wp(90)}}
                  placeholder={Strings.addhometw}
                  Headertext={Strings.addhometw}
                />
              ) : (
                <View>
                  <ButtonsCard
                    customColor
                    color={
                      ActiveIndex === true
                        ? CustomColors.black
                        : CustomColors.white
                    }
                    value={ActiveIndex === true ? newHometown : Hometown}
                    onChangeText={value => {
                      setnewHometown(value);
                    }}
                    onPressOrange={() => {
                      ActiveIndex === true
                        ? setActiveIndex(false)
                        : SetShow(true);
                      DeleteData();
                    }}
                    onPressGrey={() => {
                      ActiveIndex === true
                        ? Editdata()
                        : setnewHometown(Hometown);
                      setActiveIndex(true);
                    }}
                    editable={ActiveIndex === true ? true : false}
                    GreyText={ActiveIndex === true ? 'Save' : Strings.edit}
                    OrangeText={
                      ActiveIndex === true ? 'Cancel' : Strings.delete
                    }
                    placeholder={'Enter Workplace'}
                    MainViewStyle={{
                      marginBottom: hp(2.5),
                      width: wp(90),
                      backgroundColor:
                        ActiveIndex === true
                          ? CustomColors.white
                          : CustomColors.lightbg,
                    }}
                  />
                </View>
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
export default PlaceLived;
