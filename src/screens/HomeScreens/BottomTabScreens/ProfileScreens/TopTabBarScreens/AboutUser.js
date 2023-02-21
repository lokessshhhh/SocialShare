//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AuthStyle} from '../../../../AuthScreens/AuthStyle';
import {CustomColors} from '../../../../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../theme/layout';
import {Strings} from '../../../../../theme/strings';
import {AllComponentStyle} from '../../../../../components/AllComponentStyles';
import {Img} from '../../../../../theme/Img';
import AboutCard from '../../../../../components/ProfileScreens/AboutCard';
import OverviewScreen from './AboutUserScreens/OverviewScreen';

// create a component
const AboutUser = ({navigation}) => {
  const [IsScreen, SetIsScreen] = useState('');

  const OverviewArray = [
    {
      name: 'Overview',
      img: Img.searchmenu,
    },
    {
      name: 'Work and Education',
      img: Img.education,
    },
    {
      name: 'Place Lived',
      img: Img.map,
    },
    {
      name: 'Contact and Basic Info',
      img: Img.telephone,
    },
    {
      name: 'Family and Relationships',
      img: Img.family,
    },
    {
      name: 'Details About You',
      img: Img.menu,
    },
    {
      name: 'Life Events',
      img: Img.event,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={AuthStyle.bgcolor}>
        <Text
          style={{
            color: CustomColors.white,
            fontSize: hp(3),
            marginLeft: wp(5),
            marginTop: hp(1.5),
          }}
        >
          {Strings.overview}
        </Text>
        <ScrollView 
        contentContainerStyle={{paddingBottom:hp(15)}}
        style={{flex: 1}}>
          <View style={{width: wp(90), alignSelf: 'center'}}>
            {OverviewArray.map((item, index) => (
              <AboutCard
                onPress={() => {
                  index === 0
                    ? navigation.navigate('OverviewScreen')
                    : index === 1
                    ? navigation.navigate('WorkEducation')
                    : 
                    index === 2
                    ? navigation.navigate('PlaceLived')
                    :
                    index === 3
                    ? navigation.navigate('ContactInfo')
                    :
                    index === 4
                    ? navigation.navigate('FamilyRelations')
                    :
                    index === 5
                    ? navigation.navigate('DetailsAbout')
                    :
                    index === 6
                    ? navigation.navigate('LifeEvents')
                    :
                    null;
                }}
                overviewtext={item.name}
                overviewimg={item.img}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AboutUser;



