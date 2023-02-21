import {StyleSheet, Platform} from 'react-native';
import {CustomColors} from '../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

export const Homestyle = StyleSheet.create({
  //Bottom navigation styles

  maintabbar: {
    paddingHorizontal: 30,
    backgroundColor: CustomColors.white,
    marginTop: hp(-5),
    height: Platform.OS === 'ios' ? hp(10) : hp(8),
    borderWidth: 0.2,
    borderBottomWidth: 1,
    borderTopWidth: 0.7,
    backgroundColor: 'white',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopColor: 'lightgrey',
    borderBottomColor: 'lightgrey',
    borderLeftColor: 'lightgrey',
    borderRightColor: 'lightgrey',
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 5,
    position:'absolute',
    bottom:0,
  },
  IconView: {
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 50,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 5,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    padding: 18,
    marginBottom: 3,
    borderRadius: 100,
    backgroundColor: CustomColors.orange,
    justifyContent: 'center',
  },
  IconBottomText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: Platform.OS === 'ios' ? hp(1) : 0,
    marginBottom: Platform.OS === 'ios' ? hp(5) : hp(8),
  },
  notfocusedImg: {
    height: hp(3.3),
    width: hp(3.3),
    tintColor: '#000000',
    marginTop: hp(2.5),
  },

  // Home Upload Screen

  ImgBG: {
    height: hp(100),
    width: wp(100),
  },
  TopBellView: {
    alignItems: 'flex-end',
    width: wp(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  BellSize: {height: hp(3.1), width: hp(3.1)},
  MainCurvedCard: {
    backgroundColor: CustomColors.primarybg,
    height: hp(85),
    width: wp(100),
    flex: 1,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  CenteredCardView: {
    borderRadius: 15,
    padding: hp(3),
    alignItems: 'center',
    width: wp(90),
    backgroundColor: CustomColors.lightbg,
    alignSelf: 'center',
    // marginTop: hp(5),
  },
  CameraIconSize: {
    height: hp(5),
    width: hp(5),
  },
  cameraBottomText: {
    textAlign: 'center',
    marginTop: hp(1),
    fontSize: hp(1.8),
    color: CustomColors.white,
  },
  UploadButtonView: {
    paddingHorizontal: wp(13),
    borderRadius: 10,
    height: hp(4.5),
    marginVertical: hp(1.5),
  },
  NoPostTextView: {
    borderRadius: 15,
    padding: hp(2),
    alignItems: 'center',
    width: wp(90),
    backgroundColor: CustomColors.lightbg,
    alignSelf: 'center',
    marginTop: hp(2.5),
  },
  NoPostTextStyle: {
    textAlign: 'center',
    fontSize: hp(2),
    color: CustomColors.white,
  },

  //User posted home

  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(95),
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: hp(2),
  },
  userText: {color: CustomColors.white, fontSize: hp(2.2), marginLeft: wp(2.5),width:'65%',fontWeight:'bold'},
  UserpostedImg: {width: '100%', height: hp(30), marginTop: -20},
  postFunctionRow: {
    marginHorizontal: wp(9),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //user Posting Modal

  postUserMainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CustomColors.opacity08,
  },
  postuserCard: {
    width: wp(90),
    backgroundColor: CustomColors.primarybg,
    height: hp(50),
    borderRadius: 15,
  },
  crossbutton: {alignSelf: 'flex-end', paddingRight: wp(3), paddingTop: wp(3)},
  UserAvtarRow: {
    flexDirection: 'row',
    padding: hp(2.5),
    marginTop: hp(-3),
    width: '80%',
  },
  textInputView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },

  // Comment TextinPut

  commentRowView: {
    width: wp(88),
    marginVertical: hp(1.7),
    borderWidth: 1,
    borderColor: CustomColors.white,
    borderRadius: 10,
    height: hp(6),
    paddingHorizontal: wp(2.5),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Profile Screen Styles

  AvtarImgView: {
    alignItems: 'center',
    position: 'absolute',
    top: -30,
    left: wp(8),
  },
  ImagePickerButton: {
    backgroundColor: CustomColors.white,
    height: hp(4.5),
    width: hp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: CustomColors.black,
    borderWidth: 2,
    padding: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  Usernametext: {
    color: CustomColors.white,
    marginTop: hp(3),
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  FrndsPostsText: {
    color: CustomColors.white,
    marginTop: hp(1),
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  FrndsPostsNumber: {
    color: CustomColors.white,
    marginTop: hp(1),
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
  EditDetailsButtontext: {
    borderColor: CustomColors.white,
    color: CustomColors.white,
    marginTop: hp(1.7),
    fontSize: hp(1.8),
    borderWidth: 1,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
