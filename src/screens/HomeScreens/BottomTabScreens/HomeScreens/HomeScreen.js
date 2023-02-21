//import liraries
import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  ScrollView,
  Platform
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../theme/layout';
import {CustomColors} from '../../../../theme/CustomColors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Img} from '../../../../theme/Img';
import {Strings} from '../../../../theme/strings';
import ButtonFilled from '../../../../components/AuthScreens/ButtonFilled';
import {Homestyle} from '../../Homestyle';
import {useState} from 'react';
import {Avatar} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import PlaceButton from '../../../../components/HomeScreen/PlaceButton';
import PostButton from '../../../../components/HomeScreen/PostButton';
import {Dimensions} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';


const HomeScreen = ({route}) => {

  useEffect(()=>{
    fetchData();
  },[]);

  console.log(route, '====route====');

  const data = [
    {label: 'Private', value: '1'},
    {label: 'Public', value: '2'},
  ];

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

  const handleScroll = event => {
    SetScreenIndex(
      parseInt(
        (event.nativeEvent.contentOffset.y * 3) /
          Dimensions.get('window').height,
      ),
    );
  };

  const profilePicker = () => {
    ImagePicker.openPicker({
      mediaType: 'any',
    }).then(video => {
      SetPostUrl(video.path);
      console.log(video.path);
    });
  };

  const fetchData = async () => {
    await axios
      .get('http://159.203.67.155:8000/api/photos/homePagePost',{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MTAwMS5kZHNAZ21haWwuY29tIiwiaWF0IjoxNjc0NTM2MTMyNjgyLCJleHAiOjE2NzQ2MjI1MzJ9.hP7DIKvHCULIRLfDH2_mdqyny3RPb0N6trWlxtUPNuQ`,
        },
      })
      .then(response => {
        SetPostData(response.data)
        console.log(response.data, '===res===');
      })
      .catch(error => {
        console.log(error);
      });
  }

  const postData = async () => {

    const formData = new FormData()
    const uriPart = PostUrl.split('.');
    const fileExtension = uriPart[uriPart.length - 1];

    console.log(fileExtension,'==filext==',uriPart,'===uripart==');

    let cleanUri = Platform.OS === 'android' ? `file:///${PostUrl}` : `/private${PostUrl}`;
    formData.append('Url',{
      uri: cleanUri,
      type: `image/${fileExtension}`,
      name: `Url.${fileExtension}`,
    });
    formData.append('description',PostText);
    formData.append('category',Value );

    await axios.post('http://159.203.67.155:8000/api/photos/newPosts', formData ,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MTAwMS5kZHNAZ21haWwuY29tIiwiaWF0IjoxNjc0NjIyODY3NDQzLCJleHAiOjE2NzQ3MDkyNjd9.1C0DmBbjPU6rlvgYfRivyH_wUSeDgKyINR2cVVZV1qs`
        },
      })
      .then(response => {
        SetPostText('');
        SetPostUrl('');
        console.log(formData,'===fotmadata err===');
        console.log(response, '===res===');
      })
      .catch(error => {
        console.log(formData,'===fotmadata err===');
        console.log(error);
      });
  };

  const [ShowUpload, SetShowUpload] = useState(false);
  const [Value, SetValue] = useState('Private');
  const [ScreenIndex, SetScreenIndex] = useState(0);
  const [PostUrl, SetPostUrl] = useState('');
  const [PostText, SetPostText] = useState('');
  const [PostData, SetPostData] = useState([]);

  return (

    <SafeAreaView style={{flex: 1}}>
      <ImageBackground style={Homestyle.ImgBG} source={Img.homebg}>
        <View style={Homestyle.TopBellView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avatar rounded size={50} source={Img.character} />
            <Image
              resizeMode="contain"
              style={{height: hp(15), width: hp(15)}}
              source={Img.mainlogo}
            />
          </View>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={Homestyle.BellSize}
              source={Img.bell}
            />
          </TouchableOpacity>
        </View>

        <View style={[Homestyle.MainCurvedCard, {paddingTop: hp(5)}]}>
          {ScreenIndex >= 1 ? (
            <ButtonFilled
              onPress={() => {
                SetShowUpload(true);
              }}
              FontStyle={{fontSize: hp(1.8), fontWeight: 'bold'}}
              MainViewStyle={[
                Homestyle.UploadButtonView,
                {width: wp(90), alignSelf: 'center', marginTop: -10},
              ]}
              ButtonText={'Upload'}
            />
          ) : null}

          <ScrollView
            onScroll={e => {
              handleScroll(e);
            }}
            scrollEventThrottle={5}
            contentContainerStyle={{flexGrow: 1, paddingBottom: hp(15)}}
          >
            <View style={Homestyle.CenteredCardView}>
              <Image
                resizeMode="contain"
                style={Homestyle.CameraIconSize}
                source={Img.camera}
              />
              <Text style={Homestyle.cameraBottomText}>
                {Strings.whatgoingon} Test DDS
              </Text>
              <ButtonFilled
                onPress={() => {
                  SetShowUpload(true);
                }}
                FontStyle={{fontSize: hp(1.8), fontWeight: 'bold'}}
                MainViewStyle={Homestyle.UploadButtonView}
                ButtonText={'Upload'}
              />
            </View>

            {/* Dont Remove Important */}
            
            {/* <View style={Homestyle.NoPostTextView}>
              <Text style={Homestyle.NoPostTextStyle}>{Strings.nopost}</Text>
            </View> */}

            {UserData.map(index => (
              <View>
                <View style={Homestyle.userView}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Avatar rounded size={50} source={Img.character} />

                    <Text style={Homestyle.userText}>Loreum Ipsum</Text>
                  </View>
                  <PlaceButton Place={' your place'} />
                </View>

                <Image
                  resizeMode="stretch"
                  style={Homestyle.UserpostedImg}
                  source={Img.uploaded}
                />

                <View style={Homestyle.postFunctionRow}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <PostButton
                    ImgStyle={{height:hp(3.8),width:hp(3.8)}}
                      mainStyle={{marginRight: 15}}
                      source={Img.like}
                    />
                    <PostButton
                      mainStyle={{marginRight: 15}}
                      source={Img.comment}
                    />
                    <PostButton
                      mainStyle={{marginRight: 15}}
                      source={Img.share}
                    />
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
                    <PostButton
                      mainStyle={{marginRight: 10}}
                      source={Img.smile}
                    />
                    <PostButton source={Img.share} />
                  </View>
                </View>
              </View>
            ))}

            {/* Upload Post Modal */}

            <Modal
              animationType="slide"
              transparent
              visible={ShowUpload}
              onRequestClose={() => {
                SetShowUpload(!ShowUpload);
              }}
            >
              <View style={Homestyle.postUserMainView}>
                <View style={Homestyle.postuserCard}>
                  <TouchableOpacity
                    style={Homestyle.crossbutton}
                    onPress={() => {
                      SetShowUpload(false);
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      style={{height: hp(2.2), width: hp(2.2)}}
                      source={Img.cross}
                    />
                  </TouchableOpacity>

                  <View style={Homestyle.UserAvtarRow}>
                    <Avatar rounded size={60} source={Img.character} />
                    <View style={{marginLeft: wp(3), marginTop: hp(0.4)}}>
                      <Text
                        style={{color: CustomColors.white, fontSize: hp(2.2)}}
                      >
                        Loreum Ipsum
                      </Text>

                      <Dropdown
                        iconStyle={{
                          tintColor: 'white',
                          marginRight: 40,
                          backgroundColor: CustomColors.primarybg,
                        }}
                        placeholderStyle={{
                          color: 'white',
                          fontSize: hp(1.8),
                          backgroundColor: CustomColors.primarybg,
                        }}
                        itemTextStyle={{
                          color: CustomColors.primarybg,
                          fontSize: hp(1.8),
                          marginVertical: -15,
                        }}
                        containerStyle={{
                          backgroundColor: CustomColors.white,
                          borderColor: CustomColors.primarybg,
                        }}
                        selectedTextStyle={{
                          color: 'white',
                          fontSize: hp(1.8),
                          backgroundColor: CustomColors.primarybg,
                        }}
                        itemContainerStyle={{
                          backgroundColor: CustomColors.white,
                        }}
                        style={{backgroundColor: CustomColors.primarybg}}
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder={Value}
                        value={Value}
                        onChange={item => {
                          SetValue(item.label);
                        }}
                      />
                    </View>
                  </View>

                  <View style={Homestyle.textInputView}>
                    <TextInput
                      value={PostText}
                      onChangeText={value => SetPostText(value)}
                      style={{width: '80%', color: CustomColors.white}}
                      placeholderTextColor={CustomColors.white}
                      placeholder="Write here...."
                    />
                    <Image
                      resizeMode="contain"
                      style={{height: hp(1.9), width: hp(1.9)}}
                      source={Img.edit}
                    />
                  </View>

                  <View
                    style={[
                      Homestyle.CenteredCardView,
                      {width: '90%', marginTop: hp(5)},
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        profilePicker();
                      }}
                      style={{alignItems: 'center'}}
                    >
                      {PostUrl === '' ? (
                        <View style={{alignItems: 'center'}}>
                          <Image
                            resizeMode="contain"
                            style={Homestyle.CameraIconSize}
                            source={Img.cloud}
                          />
                          <Text style={Homestyle.cameraBottomText}>
                            {Strings.imgorvideo}
                          </Text>
                        </View>
                      ) : (
                        <ImageBackground
                          resizeMode="contain"
                          style={{
                            width: wp(50),
                            height: hp(10),
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0.5,
                          }}
                          source={{uri: PostUrl}}
                        >
                          <Image
                            resizeMode="contain"
                            style={{
                              height: hp(3.3),
                              width: hp(3.3),
                              tintColor: CustomColors.black,
                            }}
                            source={Img.gallery}
                          />
                        </ImageBackground>
                      )}
                    </TouchableOpacity>

                    <ButtonFilled
                      onPress={() => {
                        SetShowUpload(true);
                        postData();
                        console.log('pressed');
                      }}
                      FontStyle={{fontSize: hp(1.8), fontWeight: 'bold'}}
                      MainViewStyle={[
                        Homestyle.UploadButtonView,
                        {marginTop: hp(2)},
                      ]}
                      ButtonText={'Post'}
                    />
                  </View>
                </View>
              </View>
            </Modal>

            {/* Upload Modal End */}

          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default HomeScreen;
