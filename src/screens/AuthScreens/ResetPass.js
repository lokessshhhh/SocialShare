//import liraries
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Img} from '../../theme/Img';
import {AuthStyle} from './AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import GreyInput from '../../components/AuthScreens/GreyInput';
import {Strings} from '../../theme/strings';
import ButtonFilled from '../../components/AuthScreens/ButtonFilled';
import TextButton from '../../components/AuthScreens/TextButton';
import axios from 'axios';
import {useState} from 'react';
import BaseURl from '../../genres/BaseUrl';
import {showMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const ResetPass = ({navigation, route}) => {
  const [Email, SetEmail] = useState(route.params.email);
  const [Password, SetPassword] = useState('');
  const [ConPassword, SetConPassword] = useState('');

  const LoginValidation = async () => {
    const token = await AsyncStorage.getItem('LoginToken');
    console.log(token, '====token===');
    const formdata = {
      password: Password,
    };

    {
      Password == ''
        ? showMessage({
            message: 'All fields must be filled',
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
        : Password.length < 8 || ConPassword.length < 8
        ? showMessage({
            message: 'Password must be more than 8 characters',
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
        : Password !== ConPassword
        ? showMessage({
            message: 'Password and confirm password does not match',
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
            .post(BaseURl + `auth/resetPasswordAPP?email=${Email}`, formdata)
            .then(response => {
              if (response.data.success === true) {
                // SetSignupIndicator(false),
                showMessage({
                  message: 'Password Updated Successfully',
                  type: 'success',
                  floating: true,
                  autoHide: true,
                  duration: 900,
                  style: {
                    marginBottom: 40,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                }),
                  setTimeout(() => {
                    navigation.reset({
                      routes: [{name: 'LoginScreen'}],
                    });
                  }, 1000);
              } else {
                showMessage({
                  message: response.data.message,
                  type: 'success',
                  floating: true,
                  autoHide: true,
                  duration: 900,
                  style: {
                    marginBottom: 40,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                });
              }
            })
            .catch(error => {
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
          <GreyInput
            value={Email}
            onChangeText={value => SetEmail(value)}
            mainViewStyle={{marginBottom: hp(2)}}
            placeholder={Strings.email}
          />
          <GreyInput
            IsSecure
            value={Password}
            onChangeText={value => SetPassword(value)}
            placeholder={Strings.password}
            mainViewStyle={{marginBottom: hp(2)}}
            showimg
          />
          <GreyInput
            IsSecure
            value={ConPassword}
            onChangeText={value => SetConPassword(value)}
            placeholder={Strings.conpassword}
            showimg
          />
          <ButtonFilled
            onPress={() => {
              LoginValidation();
            }}
            MainViewStyle={{marginVertical: hp(3)}}
            ButtonText={Strings.resetpass}
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
export default ResetPass;
