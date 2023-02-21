//import liraries
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Img} from '../../theme/Img';
import {AuthStyle} from './AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import GreyInput from '../../components/AuthScreens/GreyInput';
import {Strings} from '../../theme/strings';
import ButtonFilled from '../../components/AuthScreens/ButtonFilled';
import TextButton from '../../components/AuthScreens/TextButton';
import axios from 'axios';
import {useState} from 'react';
import BaseURl from '../../genres/BaseUrl';
import {showMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const ForgetPass = ({navigation}) => {
  const [Email, SetEmail] = useState('');
  const [IsVerify, SetIsVerify] = useState(false);
  const [Otp, SetOtp] = useState(0);

  const VerifyOTP = async () => {
    const formdata = {
      email: Email,
      OTP: Otp,
    };

    {
      Otp == ''
        ? showMessage({
            message: 'Please enter OTP',
            floating: true,
            style: {
              marginBottom: 40,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 10,
            },
            color: '#000000',
          })
        : await axios
            .post(BaseURl + 'auth/verifyOTP', formdata)
            .then(response => {
              if (response.data.success === true) {
                navigation.replace('ResetPass', {email: Email}),
                  SetIsVerify(false),
                  showMessage({
                    message: `OTP Verified Successfully`,
                    type: 'success',
                    floating: true,
                    autoHide: true,
                    duration: 2000,
                    style: {
                      marginBottom: 40,
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 10},
                      shadowOpacity: 1,
                      shadowRadius: 10,
                      elevation: 10,
                    },
                  });

                // setTimeout(() => {
                //   navigation.replace('ResetPass', {email: Email});
                // }, 1000)
              } else {
                showMessage({
                  message: response.data.message,
                  floating: true,
                  style: {
                    marginBottom: 40,
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                  color: '#000000',
                });
              }
            })
            .catch(error => {
              showMessage({
                message: error.response.data.message,
                floating: true,
                style: {
                  marginBottom: 40,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 10},
                  shadowOpacity: 1,
                  shadowRadius: 10,
                  elevation: 10,
                },
                color: '#000000',
              });
              console.log(error);
            });
    }
  };

  const ForgetValidation = async () => {
    const formdata = {
      email: Email,
    };

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    {
      Email == ''
        ? showMessage({
            message: 'Please Enter Email',
            floating: true,
            style: {
              marginBottom: 40,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 10,
            },
            color: '#000000',
          })
        : reg.test(Email) === false
        ? showMessage({
            message: 'Please Enter A Valid Email',
            floating: true,
            style: {
              marginBottom: 40,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 10,
            },
            color: '#000000',
          })
        : await axios
            .post(BaseURl + 'auth/sendOTP', formdata)
            .then(response => {
              if (response.data.success === true) {
                showMessage({
                  message: `Please check the link we sent on this email ${Email}`,
                  type: 'success',
                  floating: true,
                  autoHide: true,
                  duration: 2000,
                  style: {
                    marginBottom: 40,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                });
                SetIsVerify(!IsVerify);
                // setTimeout(() => {
                //   navigation.replace('ResetPass', {email: Email});
                // }, 1000);
              } else {
                showMessage({
                  message: response.data.message,
                  floating: true,
                  style: {
                    marginBottom: 40,
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                  color: '#000000',
                });
              }
            })
            .catch(error => {
              showMessage({
                message: error.response.data.message,
                floating: true,
                style: {
                  marginBottom: 40,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 10},
                  shadowOpacity: 1,
                  shadowRadius: 10,
                  elevation: 10,
                },
                color: '#000000',
              });
              console.log(error);
            });
    }
  };

  return (
    <SafeAreaView style={AuthStyle.bgcolor}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image
          resizeMode="contain"
          style={AuthStyle.splashlogo}
          source={Img.splashscreen}
        />
        <View
          style={[
            {
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: wp(90),
              marginTop: hp(5),
            },
          ]}>
          {IsVerify ? (
            <GreyInput
              maxLength={4}
              value={Otp}
              onChangeText={value => SetOtp(value)}
              mainViewStyle={{marginVertical: hp(2)}}
              placeholder={Strings.enterotp}
            />
          ) : (
            <GreyInput
              value={Email}
              onChangeText={value => SetEmail(value)}
              mainViewStyle={{marginVertical: hp(2)}}
              placeholder={Strings.enteremail}
            />
          )}
          <ButtonFilled
            onPress={() => {
              IsVerify ? VerifyOTP() : ForgetValidation();
            }}
            MainViewStyle={{marginVertical: hp(3)}}
            ButtonText={IsVerify ? Strings.verify : Strings.submit}
          />
        </View>
        <TextButton
          onPress={() => {
            navigation.replace('LoginScreen');
          }}
          ShowText={Strings.bklogin}
        />
        <FlashMessage position="bottom" />
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default ForgetPass;
