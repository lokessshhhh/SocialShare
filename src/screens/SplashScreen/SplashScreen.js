//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import { Img } from '../../theme/Img';
import { CustomColors } from '../../theme/CustomColors';


// create a component
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
      setTimeout(() => {
         navigation.replace('LoginScreen');
      }, 4000)
  };

  return (
    <View style={styles.container}>
      <Image 
      resizeMode='contain'
      style={styles.splashImageStyle} source={Img.splashscreen} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
    backgroundColor:CustomColors.primarybg,
  },
  splashImageStyle: {
    height: hp(30),
    width: hp(30),
  },
});

//make this component available to the app
export default SplashScreen;
