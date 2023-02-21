//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../theme/layout';
import {CustomColors} from '../../../../../theme/CustomColors';
import {Img} from '../../../../../theme/Img';
import {Strings} from '../../../../../theme/strings';
import ButtonFilled from '../../../../../components/AuthScreens/ButtonFilled';
import {Homestyle} from '../../../Homestyle';
import {Avatar} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import PostButton from '../../../../../components/HomeScreen/PostButton';
import {AuthStyle} from '../../../../AuthScreens/AuthStyle';
import axios from 'axios';

// create a component

const Timeline = () => {
  const [PostData, SetPostData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const UserData = [
    {
      name: 'User1',
    },
    {
      name: 'User1',
    },
    {
      name: 'User1',
    },
    {
      name: 'User1',
    },
    {
      name: 'User1',
    },
    {
      name: 'User1',
    },
    {
      name: 'User1',
    },
    {
      name: 'User1',
    },
    {
      name: 'User1',
    },
  ];

  const fetchData = async () => {
    await axios
      .get(
        'http://159.203.67.155:8000/api/photos/show?id=63a52e02015f7b1d9ded8803',
      )
      .then(response => {
        
        console.log(response.data, '===res===');
        SetPostData(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <View style={AuthStyle.bgcolor}>
      <ScrollView
        contentContainerStyle={{paddingBottom: hp(15)}}
        style={{flex: 1}}
      >
        <View style={[Homestyle.CenteredCardView, {marginVertical: hp(3)}]}>
          <Image
            resizeMode="contain"
            style={{marginBottom: hp(1), height: hp(6), width: hp(6)}}
            source={Img.camera}
          />
          <Text
            style={[
              Homestyle.cameraBottomText,
              {fontSize: hp(2.1), marginBottom: hp(1)},
            ]}
          >
            {Strings.saysomething}
          </Text>
          <ButtonFilled
            FontStyle={{fontSize: hp(2.5), fontWeight: 'bold'}}
            MainViewStyle={Homestyle.UploadButtonView}
            ButtonText={'Upload'}
          />
        </View>

        {UserData.length>0 && UserData.map((item, index) => (
          <View>
            <View style={Homestyle.userView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar rounded size={50} source={Img.character} />
                <Text style={Homestyle.userText}>{'Alex Costa'}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image
                    resizeMode="contain"
                    style={{height: hp(2.7), width: hp(2.7)}}
                    source={Img.edit}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    resizeMode="contain"
                    style={{height: hp(2.7), width: hp(2.7), marginLeft: wp(3)}}
                    source={Img.bin}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                color: CustomColors.white,
                fontSize: hp(1.9),
                marginLeft: wp(6),
                marginVertical: hp(0.5),
                width: '80%',
              }}
            >
              {item.description}
            </Text>
            <Image
              resizeMode="stretch"
              style={Homestyle.UserpostedImg}
              source={Img.uploaded}
            />

            <View style={Homestyle.postFunctionRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <PostButton
                  ImgStyle={{height: hp(3.8), width: hp(3.8)}}
                  source={Img.like}
                />
                <Text
                  style={{
                    color: CustomColors.white,
                    fontSize: hp(2),
                    marginHorizontal: wp(1.5),
                  }}
                >
                  {item.like}1
                </Text>

                <PostButton
                  mainStyle={{marginRight: 15}}
                  source={Img.comment}
                />
                <PostButton mainStyle={{marginRight: 15}} source={Img.share} />
              </View>
              <PostButton source={Img.save} />
            </View>

            <View style={Homestyle.commentRowView}>
              <TextInput
                style={{width: '70%', color: CustomColors.white}}
                placeholder="Write a comment...."
                placeholderTextColor={CustomColors.white}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <PostButton mainStyle={{marginRight: 10}} source={Img.smile} />
                <PostButton source={Img.share} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default Timeline;
