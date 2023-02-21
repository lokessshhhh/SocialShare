import {StyleSheet} from 'react-native';
import {AuthStyle} from './AuthStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../theme/layout';
import {CustomColors} from '../theme/CustomColors';

export const AllComponentStyle = StyleSheet.create({
  //Auth White Text Input
  GreyMainView: {
    backgroundColor: 'white',
    borderRadius: 40,
    paddingLeft: 20,
    height: hp(6),
    // borderWidth: 2,
    // borderColor: '#3079b0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eyeimgsize: {
    height: hp(4.5),
    width: wp(4.5),
    marginRight: 20,
    tintColor: 'grey',
  },

  //Auth orange button

  filledbuttonview: {
    backgroundColor: CustomColors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6),
    borderRadius: 30,
  },

  //border textInput

  inputStyle: {
    color: CustomColors.white,
    borderWidth: 1,
    borderColor: CustomColors.white,
    borderRadius: 30,
    paddingLeft: wp(5),
    height: hp(6),
    marginVertical: hp(1.5),
  },

  //SemiFilledButton

  SemiFilledView: {
    backgroundColor: CustomColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6),
    borderRadius: 30,
    borderWidth: 2,
    borderColor: CustomColors.black,
    marginTop: hp(5),
    marginBottom: hp(2.5),
  },

  // ProfileScreen Componemts

  ProfileCard: {
    borderRadius: 10,
    width: wp(90),
    alignItems: 'center',
    backgroundColor: CustomColors.lightbg,
    alignSelf: 'center',
    padding: hp(1.3),
    flexDirection: 'row',
  },
  AvtarImgView: {
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(6),
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: CustomColors.primarybg,
  },
  MenuTextStyle: {
   color:CustomColors.white,
    fontSize: hp(2.3),
    marginLeft: 15,
    fontWeight: '400',
  },
  ButtonCardView:{
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CustomColors.lightbg,
    justifyContent: 'space-between',
  },


  //Chat Screen Styles

  chatMainButton:{
    flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: hp(1.8),
        borderColor: CustomColors.lightbg,
  },
  ActiveDot:{
    backgroundColor: '#0EC404',
    borderRadius: 100,
    height: hp(2),
    width: hp(2),
    position: 'absolute',
    bottom: 2,
    right: 0,
  },
  chatCounterDot:{
    
    backgroundColor: CustomColors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(0.7),
    overflow: 'hidden',
    borderRadius: 100,
  },

  //Family Relationships

  FamilycardView:{
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: CustomColors.lightbg,
    height: hp(8),
    borderRadius: 10,
    width:wp(90),
    justifyContent:'space-between',
    marginTop:hp(2.5)
  }


});
