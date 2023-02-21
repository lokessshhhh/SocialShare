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
import {CustomColors} from '../../../../../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../../theme/layout';
import {Strings} from '../../../../../../theme/strings';
import {AllComponentStyle} from '../../../../../../components/AllComponentStyles';
import {Img} from '../../../../../../theme/Img';
import AboutCard from '../../../../../../components/ProfileScreens/AboutCard';
import {Homestyle} from '../../../../Homestyle';
import {ProfileStyles} from '../../ProfileStyles';
import axios from 'axios';
import BaseURl from '../../../../../../genres/BaseUrl';

// create a component
const OverviewScreen = ({navigation}) => {
  const [overViewData, SetoverViewData] = useState([]);

  useEffect(() => {
    GetOverviewdata();
  }, []);

  const OverviewArray2 = [
    {
      name: 'Designation',
      img: Img.case,
    },
    {
      name: 'City,State,Country',
      img: Img.house,
    },
    {
      name: 'Number',
      img: Img.telephone,
    },
    {
      name: 'Email',
      img: Img.email,
    },
    {
      name: 'Website',
      img: Img.link,
    },
    {
      name: 'Religious',
      img: Img.prayer,
    },
    {
      name: 'Relationship',
      img: Img.couple,
    },
  ];

  const GetOverviewdata = async () => {

    
    await axios
      .get(
        `${BaseURl}api/user/profile?id=63a52e02015f7b1d9ded8803`,
      )
      .then(response => {
        console.log(response.data.data);
        SetoverViewData(response.data.data);
      })
      .catch(err => {
        console.log(err);
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
          <Text style={ProfileStyles.menumaintext}>{Strings.overview}</Text>
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(15)}}
            style={{flex: 1}}
          >
            <View style={{width: wp(90), alignSelf: 'center'}}>
              {OverviewArray2.map((item, index) => (
                <AboutCard
                  onPress={() => {
                    index === 0 ? SetIsScreen('Overview') : null;
                  }}
                  overviewtext={
                    item.name === 'Designation'
                      ? overViewData.designation
                      : item.name === 'City,State,Country'
                      ? overViewData.city
                      : item.name === 'Number'
                      ? item.name
                      : item.name === 'Email'
                      ? overViewData.emailId
                      : item.name
                  }
                  overviewimg={item.img}
                />
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
export default OverviewScreen;
