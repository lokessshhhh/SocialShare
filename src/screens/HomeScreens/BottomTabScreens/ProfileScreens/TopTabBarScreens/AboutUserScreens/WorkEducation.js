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
} from 'react-native';
import {AuthStyle} from '../../../../../AuthScreens/AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../../theme/layout';
import {Strings} from '../../../../../../theme/strings';
import {Img} from '../../../../../../theme/Img';
import {Homestyle} from '../../../../Homestyle';
import ExpandButton from '../../../../../../components/ProfileScreens/ExpandButton';
import {ProfileStyles} from '../../ProfileStyles';
import axios from 'axios';
import BaseURl from '../../../../../../genres/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonsCard from '../../../../../../components/ProfileScreens/ButtonsCard';
import {CustomColors} from '../../../../../../theme/CustomColors';

// create a component

const WorkEducation = ({navigation}) => {
  useEffect(() => {
    GetAllData();
  }, []);

  const [AllData, SetAllData] = useState([]);
  const [Workplace, SetWorkPlace] = useState('');
  const [Univ, SetUniv] = useState('');
  const [HighSchl, SetHighSchl] = useState('');
  const [ActiveIndex, setActiveIndex] = useState(null);
  const [EditedValue, setEditedValue] = useState('');

  const GetAllData = async () => {
    const Id = await AsyncStorage.getItem('UserId');

    await axios
      .get(`${BaseURl}api/about/getAboutData?userid=${Id}`)
      .then(response => {
        SetAllData(response.data.userData);
        console.log(response.data.userData, '===res===');
        console.log(AllData, '===state data=====');
      })
      .catch(error => {
        console.log(error, '===error===');
      });
  };

  const SaveData = async work => {
    const Id = await AsyncStorage.getItem('UserId');
    const FormData = {
      userId: Id,
      name:
        work === 'work'
          ? Workplace
          : work === 'university'
          ? Univ
          : work === 'highSchool'
          ? HighSchl
          : '',
      fieldName: work,
    };
    {
      Workplace === '' && Univ === '' && HighSchl === ''
        ? alert('Please Insert Data')
        : await axios
            .post(`${BaseURl}api/about/addSingleArray`, FormData)
            .then(response => {
              SetWorkPlace('');
              SetUniv('');
              SetHighSchl('');
              GetAllData();
              console.log(FormData);
              console.log(response.data);
            })
            .catch(error => {
              console.log(error.response.data);
            });
    }
  };

  const Editdata = async (id, field, index) => {
    const Id = await AsyncStorage.getItem('UserId');
    const FormData = {
      dataId: id,
      name:
        field === 'work'
          ? ActiveIndex === index
            ? EditedValue
            : Workplace
          : field === 'university'
          ? ActiveIndex === index
            ? EditedValue
            : Univ
          : field === 'highSchool'
          ? ActiveIndex === index
            ? EditedValue
            : HighSchl
          : '',
      userId: Id,
      fieldName: field,
    };

    await axios
      .post(`${BaseURl}api/about/updateSingleArray`, FormData)
      .then(response => {
        setActiveIndex(null);
        GetAllData();
        console.log(FormData);
        console.log(response.data, '==edit res==');
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const DeleteData = async (id, field) => {
    console.log(id, '===id==');
    const Id = await AsyncStorage.getItem('UserId');
    console.log(Id, '==Id==');
    const FormData = {
      dataId: id,
      userId: Id,
      fieldName: field,
    };

    await axios
      .post(`${BaseURl}api/about/deleteSingleArray`, FormData)
      .then(response => {
        GetAllData();
        console.log(FormData);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
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
          <Text style={ProfileStyles.menumaintext}>{Strings.WandE}</Text>
          <ScrollView style={{marginBottom: hp(10)}}>
            <View style={{width: wp(90), alignSelf: 'center'}}>
              <Text style={ProfileStyles.menuheadertext}>{Strings.work}</Text>
              <ExpandButton
                value={Workplace}
                onChangeText={value => {
                  SetWorkPlace(value);
                }}
                onPressOrange={() => {
                  SaveData('work');
                }}
                Headertext={Strings.addwork}
                placeholder={Strings.addwork}
              />

              {AllData.length > 0 &&
                AllData[0].work.length > 0 &&
                AllData[0].work.map((item, index) => (
                  <View>
                    <ButtonsCard
                      customColor
                      color={
                        ActiveIndex === index
                          ? CustomColors.black
                          : CustomColors.white
                      }
                      value={ActiveIndex === index ? EditedValue : item.name}
                      onChangeText={value => {
                        setEditedValue(value);
                      }}
                      onPressOrange={() => {
                        ActiveIndex === index
                          ? setActiveIndex(null)
                          : DeleteData(item._id, 'work');
                      }}
                      onPressGrey={() => {
                        ActiveIndex === index
                          ? Editdata(item._id, 'work', index)
                          : setEditedValue(item.name);
                        setActiveIndex(index);
                      }}
                      editable={ActiveIndex === index ? true : false}
                      GreyText={ActiveIndex === index ? 'Save' : Strings.edit}
                      OrangeText={
                        ActiveIndex === index ? 'Cancel' : Strings.delete
                      }
                      placeholder={'Enter Workplace'}
                      MainViewStyle={{
                        marginTop: hp(2.5),
                        backgroundColor:
                          ActiveIndex === index
                            ? CustomColors.white
                            : CustomColors.lightbg,
                      }}
                    />
                  </View>
                ))}

              <Text style={ProfileStyles.menuheadertext}>{Strings.univ}</Text>
              <ExpandButton
                value={Univ}
                onChangeText={value => {
                  SetUniv(value);
                }}
                onPressOrange={() => {
                  SaveData('university');
                }}
                Headertext={Strings.adduni}
                placeholder={Strings.adduni}
              />

              {AllData.length > 0 &&
                AllData[0].university.length > 0 &&
                AllData[0].university.map((item, index) => (
                  <View>
                    <ButtonsCard
                      customColor
                      color={
                        ActiveIndex === index
                          ? CustomColors.black
                          : CustomColors.white
                      }
                      value={ActiveIndex === index ? EditedValue : item.name}
                      onChangeText={value => {
                        setEditedValue(value);
                      }}
                      onPressOrange={() => {
                        ActiveIndex === index
                          ? setActiveIndex(null)
                          : DeleteData(item._id, 'university');
                      }}
                      onPressGrey={() => {
                        ActiveIndex === index
                          ? Editdata(item._id, 'university', index)
                          : setEditedValue(item.name);
                        setActiveIndex(index);
                      }}
                      editable={ActiveIndex === index ? true : false}
                      GreyText={ActiveIndex === index ? 'Save' : Strings.edit}
                      OrangeText={
                        ActiveIndex === index ? 'Cancel' : Strings.delete
                      }
                      placeholder={'Enter University'}
                      MainViewStyle={{
                        marginTop: hp(2.5),
                        backgroundColor:
                          ActiveIndex === index
                            ? CustomColors.white
                            : CustomColors.lightbg,
                      }}
                    />
                  </View>
                ))}

              <Text style={ProfileStyles.menuheadertext}>
                {Strings.highsch}
              </Text>
              <ExpandButton
                value={HighSchl}
                onChangeText={value => {
                  SetHighSchl(value);
                }}
                onPressOrange={() => {
                  SaveData('highSchool');
                }}
                Headertext={Strings.addschl}
                placeholder={Strings.addschl}
              />

              {AllData.length > 0 &&
                AllData[0].highSchool.length > 0 &&
                AllData[0].highSchool.map((item, index) => (
                  <View>
                    <ButtonsCard
                      customColor
                      color={
                        ActiveIndex === index
                          ? CustomColors.black
                          : CustomColors.white
                      }
                      value={ActiveIndex === index ? EditedValue : item.name}
                      onChangeText={value => {
                        setEditedValue(value);
                      }}
                      onPressOrange={() => {
                        ActiveIndex === index
                          ? setActiveIndex(null)
                          : DeleteData(item._id, 'highSchool');
                      }}
                      onPressGrey={() => {
                        ActiveIndex === index
                          ? Editdata(item._id, 'highSchool', index)
                          : setEditedValue(item.name);
                        setActiveIndex(index);
                      }}
                      editable={ActiveIndex === index ? true : false}
                      GreyText={ActiveIndex === index ? 'Save' : Strings.edit}
                      OrangeText={
                        ActiveIndex === index ? 'Cancel' : Strings.delete
                      }
                      placeholder={'Enter highSchool'}
                      MainViewStyle={{
                        marginTop: hp(2.5),
                        backgroundColor:
                          ActiveIndex === index
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
export default WorkEducation;
