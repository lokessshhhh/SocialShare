import { StyleSheet } from "react-native"
import { CustomColors } from "../../../../theme/CustomColors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../theme/layout';


export const ProfileStyles = StyleSheet.create({

// About Tab Styles

//Overview menu tab
backimgview:{
    position: 'absolute',
    left: wp(5),
    top: hp(2.5)
},
backimg:{
    height: hp(4),
    width: hp(4),
    tintColor: CustomColors.primarybg,
},
menumaintext:{
    color: CustomColors.white,
    fontSize: hp(3),
    marginLeft: wp(5),
    marginTop: hp(7),
    marginBottom: hp(1.5),
},
menuheadertext:{
    color: CustomColors.white,
    fontSize: hp(2.2),
    marginVertical:hp(2.5),
},

//place Lived

locationImgavtar:{
    height: hp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(4.5),
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: CustomColors.white,
},


//Photos Screen Tab
toptabmainview:{
    alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            // width: wp(50),
            padding: 5,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: CustomColors.white,
            marginTop: hp(2.5),
},
toptabbutton:{
    padding: 4,
    borderRadius: 5,
    paddingHorizontal: 5,
},
toptabtext:{
    color: CustomColors.white,
                fontSize: hp(1.7),
                marginLeft: wp(1),
},

//Frieends Screen
headerMaintext:{
    color: CustomColors.white,
    fontSize: hp(2.5),
    alignSelf: 'flex-start',
    marginVertical:hp(2.5)
},
AvtarImg:{
    height: hp(7.5),
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(7.5),
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: CustomColors.lightbg,
}

})