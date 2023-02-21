//import liraries
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput,SafeAreaView} from 'react-native';
import {Img} from '../../theme/Img';
import {AuthStyle} from './AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import {CustomColors} from '../../theme/CustomColors';
import {Strings} from '../../theme/strings';
import TextButton from '../../components/AuthScreens/TextButton';
import BorderInput from '../../components/AuthScreens/BorderInput';
import SemiFilledButton from '../../components/AuthScreens/SemiFilledButton';
import axios from 'axios';
import FlashMessage from 'react-native-flash-message';
import {showMessage} from 'react-native-flash-message';
import BaseURl from '../../genres/BaseUrl';

// create a component
export default class SignUpScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      username: '',
    };
  }

  SignUpValidation = async () => {
    const formdata = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      uname: this.state.username,
    };

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    {
      this.state.email == '' ||
      this.state.password == '' ||
      this.state.name == '' ||
      this.state.username == ''
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
        : reg.test(this.state.email) === false
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
        : this.state.password.length < 8
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
            .post(BaseURl + 'auth/signup', formdata)
            .then(response => {
              if (response.data.success === true) {
                // SetSignupIndicator(false),
                showMessage({
                  message: 'Sign-Up Successful',
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
                    this.props.navigation.reset({
                      routes: [{name: 'LoginScreen'}],
                    });
                  }, 1000);
              }
            })
            .catch(error => {
              console.log(error);
            });
    }
  };

  SetSignUpData = async () => {
    const formdata = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      uname: this.state.username,
    };
    
    try {
      this.state.email === ''
        ? alert('Please Insert Email')
        : await axios
            .post('http://159.203.67.155:8000/auth/signup', formdata)
            .then(response => {
              console.log(response.data, '===data===');
              console.log(formdata);
            })
            .catch(err => {
              console.log(err.response.data, '===data===');
              console.log(formdata);
            });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <SafeAreaView style={AuthStyle.bgcolor}>
          <View style={{flex:1}}>
        <View
          style={{
            paddingLeft: wp(5),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: hp(12),
            paddingBottom: hp(2.5),
          }}>
          <View>
            <Text
              style={{
                color: CustomColors.orange,
                fontSize: hp(4),
              }}>
              {Strings.createacc}
            </Text>
            <Text
              style={{
                color: CustomColors.white,
                fontSize: hp(2.5),
                marginTop: hp(1.2),
              }}>
              {Strings.quicksafe}
            </Text>
          </View>

          <Image
            resizeMode="contain"
            style={{
              height: hp(8),
              width: hp(8),
              marginRight: wp(5),
              marginTop: wp(2.5),
            }}
            source={Img.splashscreen}
          />
        </View>

        <View style={{width: wp(90), alignSelf: 'center', marginTop: hp(4)}}>
          <View>
            <BorderInput
              onChangeText={value => this.setState({email: value})}
              value={this.state.email}
              placeholder={Strings.mobileoremail}
            />
            <BorderInput
              onChangeText={value => this.setState({name: value})}
              value={this.state.name}
              placeholder={Strings.fullname}
            />
            <BorderInput
              onChangeText={value => this.setState({username: value})}
              value={this.state.username}
              placeholder={Strings.username}
            />
            <BorderInput
              onChangeText={value => this.setState({password: value})}
              value={this.state.password}
              placeholder={Strings.password}
            />
          </View>

          <SemiFilledButton
            onPress={() => {
              this.SignUpValidation();
            }}
            EnterText={Strings.signup}
          />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginBottom: hp(7),
            }}>
            <Text
              style={{
                color: CustomColors.white,
              }}>
              {Strings.alreadyacc}
              {'  '}
            </Text>
            <TextButton
              onPress={() => {
                this.props.navigation.replace('LoginScreen');
              }}
              ShowText={'Log In'}
            />
          </View>

          <Text
            style={{
              width: '90%',
              color: CustomColors.white,
            }}>
            {Strings.bysigningup}
          </Text>
        </View>
        <FlashMessage position="bottom" />
      </View>
        </SafeAreaView>
    
    );
  }
}

//make this component available to the app
