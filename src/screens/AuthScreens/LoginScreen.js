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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const LoginScreen = ({navigation}) => {

  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');

  const LoginValidation = async () => {
    const formdata = {
      email: Email,
      password: Password,
    };

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    {
      Email == '' || Password == ''
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
        : Password.length < 8
        ? showMessage({
            message: 'Password Must be More than 8 characters',
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
            .post(BaseURl + 'auth/signin', formdata)
            .then(async response => {
              if (response.data.success === true) {
              
                console.log(response.data,'==res==');
                // SetSignupIndicator(false),
                  showMessage({
                    message: 'Login Successful',
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
                      routes: [{name: 'BottomTabs'}],
                    });
                  }, 1000);

                  await AsyncStorage.setItem('LoginToken', JSON.stringify(response.data.token)),
                  await AsyncStorage.setItem('UserId', response.data.data._id)
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
              }),
                console.log(error.response.data);
            });
    }
  };

  return (
    <SafeAreaView style={AuthStyle.bgcolor}>
      <View style={[{alignItems: 'center', justifyContent: 'center', flex: 1}]}>
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
            mainViewStyle={{marginVertical: hp(2)}}
            placeholder={Strings.emailorphone}
          />
          <GreyInput
            IsSecure
            value={Password}
            onChangeText={value => SetPassword(value)}
            placeholder={Strings.password}
            showimg
          />
          <ButtonFilled
            onPress={() => {
              LoginValidation();
            }}
            MainViewStyle={{marginVertical: hp(3)}}
            ButtonText={Strings.login}
          />
        </View>
        <TextButton
          onPress={() => {
            navigation.replace('ForgetPass');
          }}
          ShowText={Strings.forgetpass}
        />
        <View style={{flexDirection: 'row', marginVertical: hp(2)}}>
          <Text
            style={{
              color: CustomColors.white,
            }}>
            {Strings.noaccount}
            {'  '}
          </Text>
          <TextButton
            onPress={() => {
              navigation.replace('SignUpScreen');
            }}
            ShowText={'SignUp'}
          />
        </View>
        <FlashMessage position="bottom" />
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default LoginScreen;
