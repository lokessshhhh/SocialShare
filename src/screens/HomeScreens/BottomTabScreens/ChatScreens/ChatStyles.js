import {StyleSheet} from 'react-native';
import {CustomColors} from '../../../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../theme/layout';

export const ChatStyle = StyleSheet.create({
  //Chat messages

  orangetext: {
    padding: 12,
    marginRight: 15,
    color: '#fff',
    backgroundColor: CustomColors.orange,
    flexWrap: 'wrap',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  greytext: {
    padding: 12,
    marginLeft: 15,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    color: 'black',
    backgroundColor: CustomColors.lightGray,
    flexWrap: 'wrap',
  },
  greyTextView: {
    marginRight: '20%',
    marginVertical: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(2.5),
  },
  chatavtarview: {
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(4),
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: CustomColors.lightbg,
  },
  emptyavtarBg: {
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(4),
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: CustomColors.bgcolor,
  },
  SendtextInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: CustomColors.white,
    height: hp(6),
    width: wp(90),
    borderRadius: 10,
    paddingLeft: wp(2.5),
    alignSelf: 'center',
    position: 'absolute',
    bottom: hp(2.5),
  },
});
