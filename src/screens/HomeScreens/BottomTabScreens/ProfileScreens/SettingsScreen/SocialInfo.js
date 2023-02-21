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
  Modal,
} from 'react-native';
import {AuthStyle} from '../../../../AuthScreens/AuthStyle';
import {CustomColors} from '../../../../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../theme/layout';
import {Strings} from '../../../../../theme/strings';
import {Img} from '../../../../../theme/Img';
import {Homestyle} from '../../../Homestyle';
import ExpandButton from '../../../../../components/ProfileScreens/ExpandButton';
import {ProfileStyles} from '../ProfileStyles';
import ProfileCard from '../../../../../components/ProfileScreens/ProfileCard';
import {Avatar} from 'react-native-elements';
import TopHeader from '../../../../../components/HomeScreen/TopHeader';
import SelectButton from '../../../../../components/ProfileScreens/SelectButton';
import ButtonsCard from '../../../../../components/ProfileScreens/ButtonsCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// create a component

const SocialInfo = ({navigation}) => {
  const [ShowEdit, SetShowEdit] = useState(false);
  const [Designation, SetDesignation] = useState('');
  const [Country, SetCountry] = useState('');
  const [City, SetCity] = useState('');
  const [Hobbies, SetHobbies] = useState('');

  const GeneralSettings = [
    {title: '3', header: 'Friends', img: Img.pfuser},
    {title: '1', header: 'Post', img: Img.security},
    {title: 'Not Mentioned', header: 'Places', img: Img.info},
    {title: 'Not Mentioned', header: 'Designation', img: Img.info},
    {title: 'Not Mentioned', header: 'Hobbies', img: Img.info},
  ];

  const EditArray = [
    {title: 'Designation'},
    {title: 'Country'},
    {title: 'Province'},
    {title: 'City'},
    {title: 'Enter Hobbies'},
  ];

  const postUserDetails = async () => {
    console.log(Designation, '=des==', Country, '===cont===');

    const token = AsyncStorage.getItem('LoginToken');

    const formdata = {
      userId: '63a52e02015f7b1d9ded8803',
      designation: 'Devloper',
      country: 'india',
      city: 'surat',
      hobbies: ['reading', 'tracking'],
    };
    await axios
      .post('http://159.203.67.155:8000/api/user/update', formdata, {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MTAwMS5kZHNAZ21haWwuY29tIiwiaWF0IjoxNjc0NTM2MTMyNjgyLCJleHAiOjE2NzQ2MjI1MzJ9.hP7DIKvHCULIRLfDH2_mdqyny3RPb0N6trWlxtUPNuQ'}`,
        },
      })
      .then(response => {
        console.log(response.data, '===res===');
      })
      .catch(error => {
        console.log(error.response.data, '==err==');
      });
  };

  return (
    <View style={AuthStyle.bgcolor}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <TopHeader HeaderText={Strings.settings} />

        <View style={Homestyle.MainCurvedCard}>
          <Text style={ProfileStyles.menumaintext}>{Strings.yourinfo}</Text>
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(15)}}
            style={{flex: 1}}
          >
            <View style={{width: wp(90), alignSelf: 'center'}}>
              {GeneralSettings.map((item, index) => (
                <View>
                  <Text style={ProfileStyles.menuheadertext}>
                    {item.header}
                  </Text>
                  <ButtonsCard
                    onFocus={() => {
                      console.log('======');
                      SetShowEdit(true);
                    }}
                    hidebutton
                    GreyText={Strings.cancel}
                    OrangeText={Strings.save}
                    placeholder={item.title}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <Modal
          animationType="slide"
          transparent
          visible={ShowEdit}
          onRequestClose={() => {
            SetShowEdit(!ShowEdit);
          }}
        >
          <View style={Homestyle.postUserMainView}>
            <View style={[Homestyle.postuserCard, {height: hp(55)}]}>
              <TouchableOpacity
                style={Homestyle.crossbutton}
                onPress={() => {
                  SetShowEdit(false);
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{height: hp(2.2), width: hp(2.2)}}
                  source={Img.cross}
                />
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: hp(3),
                  color: CustomColors.white,
                  marginLeft: wp(5),
                }}
              >
                {Strings.editdetails}
              </Text>

              {EditArray.map((item, index) => (
                <ButtonsCard
                  value={
                    index === 0
                      ? Designation
                      : index === 1
                      ? Country
                      : index === 3
                      ? City
                      : index === 4
                      ? Hobbies
                      : null
                  }
                  onChangeText={
                    index === 0
                      ? value => {
                          SetDesignation(value);
                        }
                      : index === 1
                      ? value => {
                          SetCountry(value);
                        }
                      : index === 3
                      ? value => {
                          SetCity(value);
                        }
                      : index === 4
                      ? value => {
                          SetHobbies(value);
                        }
                      : null
                  }
                  MainViewStyle={{
                    marginHorizontal: wp(5),
                    marginTop: hp(2.5),
                    height: hp(5),
                  }}
                  onFocus={() => {
                    console.log('======');
                    SetShowEdit(true);
                  }}
                  hidebutton
                  placeholder={item.title}
                />
              ))}
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: wp(5),
                  marginTop: hp(2.5),
                }}
              >
                <SelectButton
                  onPress={() => {
                    postUserDetails();
                  }}
                  MainStyle={{padding: 5, paddingHorizontal: 30}}
                  ButtonText={'Save'}
                />
                <SelectButton
                  onPress={() => {
                    SetShowEdit(false);
                  }}
                  TextStyle={{color: CustomColors.black}}
                  MainStyle={{
                    padding: 5,
                    marginLeft: wp(5),
                    paddingHorizontal: 25,
                    backgroundColor: CustomColors.lightGray,
                  }}
                  ButtonText={'Cancel'}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

// define your styles

//make this component available to the app
export default SocialInfo;
