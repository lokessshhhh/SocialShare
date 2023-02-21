//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AllComponentStyle} from '../../../../components/AllComponentStyles';
import {Img} from '../../../../theme/Img';
import {Homestyle} from '../../Homestyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../theme/layout';
import {CustomColors} from '../../../../theme/CustomColors';
import {Avatar} from 'react-native-elements';
import ProfileCard from '../../../../components/ProfileScreens/ProfileCard';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseURl from '../../../../genres/BaseUrl';
import mime from 'mime';

// create a component
const ProfileHome = ({navigation}) => {
  const [ProfileImg, SetProfileImg] = useState('');
  const [Username, SetUsername] = useState('');

  useEffect(() => {
    GetUserDetais();
  }, []);

  // UseEffect Functions

  const GetUserDetais = async () => {
    const Id = await AsyncStorage.getItem('UserId');

    await axios
      .get(`${BaseURl}api/user/profile?id=${Id}`)
      .then(response => {
        SetProfileImg(response.data.data.profileImgURl);
        SetUsername(response.data.data.name);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const profilePicker = async () => {
    const token = AsyncStorage.getItem('LoginToken');

    ImagePicker.openPicker({
      cropping: true,
    }).then(video => {
      const newImageUri = 'file:///' + video.path.split('file:/').join('');

      const formData = new FormData();
      formData.append('image', {
        uri: newImageUri,
        type: mime.getType(newImageUri),
        name: newImageUri.split('/').pop(),
      });

      axios
        .post(`${BaseURl}api/user/setprofileimg`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(formData);
          console.log(err);
        });
      SetProfileImg(video.path);
      console.log(video.path);
    });
  };

  const MenuArray = [
    {
      name: 'Go to your profile',
      img: Img.pfuser,
    },
    {
      name: 'Account Setting',
      img: Img.pfuser2,
    },
    {
      name: 'Friend Requests',
      img: Img.pfuseradd,
    },
    {
      name: 'Search for someone',
      img: Img.pfsearch,
    },
    {
      name: 'People you may know',
      img: Img.pfpeople,
    },
    {
      name: 'Game coins',
      img: Img.pfstar,
    },
    {
      name: 'Chat Panel',
      img: Img.pfchat,
    },
    {
      name: 'Log out',
      img: Img.pflogout,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: hp(5),
            right: wp(5),
          }}
        >
          <Image
            resizeMode="contain"
            style={Homestyle.BellSize}
            source={Img.bell}
          />
        </TouchableOpacity>

        <View style={Homestyle.MainCurvedCard}>
          <View style={{flexDirection: 'row', width: wp(90)}}>
            <View style={Homestyle.AvtarImgView}>
              <View>
                <Avatar
                  containerStyle={{backgroundColor: CustomColors.opacity07}}
                  rounded
                  size={90}
                  source={ProfileImg === '' ? Img.character : {uri: ProfileImg}}
                />
                <TouchableOpacity
                  onPress={() => {
                    profilePicker();
                  }}
                  style={Homestyle.ImagePickerButton}
                >
                  <Image
                    resizeMode="contain"
                    style={{height: hp(2.8), width: hp(2.8)}}
                    source={Img.camerablack}
                  />
                </TouchableOpacity>
              </View>
              <Text style={Homestyle.Usernametext}>{Username}</Text>
            </View>
            <View style={{marginLeft: wp(45), alignItems: 'center'}}>
              <View style={{flexDirection: 'row', marginTop: hp(1)}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={Homestyle.FrndsPostsNumber}>15</Text>
                  <Text style={Homestyle.FrndsPostsText}>Friends</Text>
                </View>

                <View style={{marginLeft: wp(10), alignItems: 'center'}}>
                  <Text style={Homestyle.FrndsPostsNumber}>15</Text>
                  <Text style={Homestyle.FrndsPostsText}>Posts</Text>
                </View>
              </View>

              <TouchableOpacity>
                <Text style={Homestyle.EditDetailsButtontext}>
                  {' '}
                  Edit Details{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{flex: 1, marginTop: hp(2)}}>
            {MenuArray.map((item, index) => (
              <ProfileCard
                onPress={() => {
                  index === 0
                    ? navigation.navigate('UserProfile')
                    : index === 1
                    ? navigation.navigate('SettingsHome')
                    : null;
                }}
                menuImg={item.img}
                MenuName={item.name}
                MainViewStyle={{marginTop: hp(2)}}
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

//make this component available to the app
export default ProfileHome;
