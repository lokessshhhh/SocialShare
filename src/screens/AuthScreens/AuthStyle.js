import {StyleSheet} from 'react-native';
import {CustomColors} from '../../theme/CustomColors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../theme/layout';

export const AuthStyle = StyleSheet.create({

    //Main Styles

  bgcolor: {
    flex:1,
    backgroundColor: CustomColors.primarybg,
  },
  elevation:{
    shadowOpacity: 0.5,
    shadowOffset: {width: 2, height: 2},
    elevation: 3,
  },

  //SplashLogoImage

  splashlogo:{
    height: hp(20),
    width: hp(20),
    marginVertical:hp(2.5),
  }
});
