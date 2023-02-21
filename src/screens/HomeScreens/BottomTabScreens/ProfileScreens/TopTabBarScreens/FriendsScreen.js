//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AuthStyle} from '../../../../AuthScreens/AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../theme/layout';
import {Img} from '../../../../../theme/Img';
import {Strings} from '../../../../../theme/strings';
import {CustomColors} from '../../../../../theme/CustomColors';
import SearchInput from '../../../../../components/ProfileScreens/SearchInput';
import SelectButton from '../../../../../components/ProfileScreens/SelectButton';
import {Homestyle} from '../../../Homestyle';
import {ProfileStyles} from '../ProfileStyles';
import FriendsCard from '../../../../../components/ProfileScreens/FriendsCard';

// create a component
const FriendsScreen = ({navigation}) => {
  const UsersData = [
    {
      name: 'Alex costa',
    },
    {
      name: 'Alex costa',
    },
    {
      name: 'Alex costa',
    },
    {
      name: 'Alex costa',
    },
    {
      name: 'Alex costa',
    },
    {
      name: 'Alex costa',
    },
    {
      name: 'Alex costa',
    },
    {
      name: 'Alex costa',
    },
  ];

  return (
    <View style={AuthStyle.bgcolor}>
      <View style={{width: wp(90), alignSelf: 'center', paddingTop: hp(2.5)}}>
        <SearchInput />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: hp(2.5),
          }}
        >
          <SelectButton 
          onPress={()=>{
            navigation.navigate('FriendReq')
          }}
          ButtonText={Strings.friendsreq} />
          <SelectButton
           onPress={()=>{
            navigation.navigate('FindFriends')
          }}
            MainStyle={{marginLeft: wp(2.5)}}
            ButtonText={Strings.findfriends}
          />
        </View>

        <Text style={ProfileStyles.headerMaintext}> {Strings.allfriends}</Text>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:hp(30)}}
        >
          {UsersData.map(item => (
            <FriendsCard
            userAvtar={Img.playbutton}
            UserName={item.name}
            UserLocation={'Portugis north East'}
            />
          ))}
        </ScrollView>

        {/* <View style={Homestyle.NoPostTextView}>
              <Text style={Homestyle.NoPostTextStyle}>{Strings.nofriends}</Text>
            </View>   */}
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default FriendsScreen;
