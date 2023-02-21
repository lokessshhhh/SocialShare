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
import ButtonsCard from '../../../../../../components/ProfileScreens/ButtonsCard';
import BaseURl from '../../../../../../genres/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// create a component
const LifeEvents = ({navigation}) => {
  useEffect(() => {
    GetAllData();
  }, []);

  const [editevent, setEditevent] = useState('');
  const [IsEdit, setIsEdit] = useState('');
  const [eventList, setEventlist] = useState([]);
  const [Id, setId] = useState('');

  const GetAllData = async () => {
    const Id = await AsyncStorage.getItem('UserId');
    await axios
      .get(
        `${BaseURl}api/about/getAboutData?userid=${'63a52e02015f7b1d9ded8803'}`,
      )
      .then(response => {
        setEventlist(
          response.data.userData[0].lifeEvents
            ? response.data.userData[0].lifeEvents.reverse()
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

  const SaveData = async (id) => {
    const Id = await AsyncStorage.getItem('UserId');
    const token = AsyncStorage.getItem('LoginToken');

    const formData = {
      userId: id,
      name: editevent,
      fieldName: 'lifeEvents',
    };

    setIsEdit('');
    await axios
      .post(
       `${BaseURl}api/about/addSingleArray`,
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
          <Text style={ProfileStyles.menumaintext}>{Strings.lifeevents}</Text>
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(15)}}
            style={{flex: 1}}
          >
            <View style={{width: wp(90), alignSelf: 'center'}}>
              <Text style={ProfileStyles.menuheadertext}>
                {Strings.lifeevents}
              </Text>

              <ExpandButton
                onPressOrange={() => {
                  SaveData();
                }}
                value={editevent}
                onChangeText={value => {
                  setEditevent(value);
                }}
                mainViewStyle={{marginTop: hp(2.5)}}
                Headertext={Strings.addevent}
                placeholder={Strings.addevent}
              />

              {eventList.length > 0 &&
                eventList.map(item => (
                  <View>
                    <ButtonsCard
                      isIcon
                      source={Img.language}
                      customColor
                      color={CustomColors.white}
                      value={Id === item._id ? editevent : item.name}
                      onChangeText={value => {
                        setEditevent(value);
                      }}
                      onPressOrange={() => {
                        Id === item._id
                          ? setId('')
                          : DeleteData('lifeEvents', item._id);
                      }}
                      onPressGrey={() => {
                        Id === item._id
                          ? editevent === ''
                            ? alert('Please Insert Data')
                            : SaveData(item._id)
                          : (setEditevent(item.name), setId(item._id));
                      }}
                      editable={Id === item._id ? true : false}
                      GreyText={Id === item._id ? 'Save' : Strings.edit}
                      OrangeText={Id === item._id ? 'Cancel' : Strings.delete}
                      placeholder={'Add Life Event'}
                      MainViewStyle={{
                        width: wp(90),
                        marginTop: hp(2.5),
                        backgroundColor:
                          Id === item._id
                            ? CustomColors.white
                            : CustomColors.lightbg,
                      }}
                    />
                  </View>
                ))}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles

//make this component available to the app
export default LifeEvents;
