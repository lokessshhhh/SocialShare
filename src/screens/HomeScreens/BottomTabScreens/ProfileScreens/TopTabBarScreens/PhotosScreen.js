//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Strings} from '../../../../../theme/strings';
import {AuthStyle} from '../../../../AuthScreens/AuthStyle';
import {ProfileStyles} from '../ProfileStyles';
import {CustomColors} from '../../../../../theme/CustomColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../theme/layout';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {Img} from '../../../../../theme/Img';

// create a component
const PhotosScreen = () => {
  const [IsColor, SetisColor] = useState(false);

  const imageURL = [
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
      img2: Img.cameraplus,
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSlC5NEH60CTgwgBpXYJTI37o3jNNQImqhw&usqp=CAU',
      img2: Img.cameraplus,
    },
    {
      img:
        'https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FkfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        img2: Img.cameraplus,
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnDY0OG3s-x7g5BHX1-xgoKqmsqUi4iTYbw&usqp=CAU',
      img2: Img.cameraplus,
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
      img2:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
      img2: Img.cameraplus,
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
      img2:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
      img2: Img.cameraplus,
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVsfqGcAR7kys85g9ak3ZL6GJZk5k5A6u9Q&usqp=CAU',
      img2:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
      img2: Img.cameraplus,
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWki9BefMF5QIYQQDhml_hrGqmyMZ7h5UM9uVq0jrmK6yOD0R7cDUcaDA_d9hqwVOE-g&usqp=CAU',
      img2: Img.cameraplus,
    },
  ];

  const SCREEN_WIDTH = Dimensions.get('window').width;

  const getChildrenStyle = i => {
    return {
      width:
      i === 0
          ? wp(28)
          : i === 1
          ? wp(62)
          : // i === 2 ? wp(60) : i === 4 ? wp(60) : i === 3 ? wp(33) :
          wp(45),
      height:
        i === 0
        ? wp(28)
        : i === 1
        ? wp(28)
          : // i === 2 ? hp(20) : i === 4 ? hp(19) : i === 3 ? hp(40) :
            Number(Math.random() * 20 + 12) * 10,
      // backgroundColor: CustomColors.white,
      margin: 4,
      marginLeft:
        i === 1
          ? wp(-17.5)
          : // : i === 3 ? wp(15)
            wp(0),
      borderRadius: 18,
    };
  };

  const getChildrenStyle2 = i => {
    return {
      width:
        i === 0
          ? wp(28)
          : i === 1
          ? wp(62)
          : // i === 2 ? wp(60) : i === 4 ? wp(60) : i === 3 ? wp(33) :
          wp(45),
      height:
        i === 0
          ? wp(28)
          : i === 1
          ? wp(28)
          : // i === 2 ? hp(20) : i === 4 ? hp(19) : i === 3 ? hp(40) :
            Number(Math.random() * 20 + 12) * 10,
      // backgroundColor: CustomColors.white,
      margin: 4,
      marginLeft:
        i === 1
          ? wp(-17.5)
          : // : i === 3 ? wp(15)
            wp(0),
      borderRadius: 18,
      backgroundColor:CustomColors.white,
      alignItems:'center',
      justifyContent:'center'
    };
  };

  const renderChildren = (item, i) => {
    console.log(i, '===index===');
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(i);
        }}
        style={getChildrenStyle(i)}
        key={i}
      >
        {/* <View style={styles.avatarImage}> */}
        <Image
          onError={() => {}}
          style={styles.avatarImage}
          source={{uri: item.img}}
          resizeMode={'contain'}
        />
        {/* </View> */}
      </TouchableOpacity>
    );
  };

  const renderChildren2 = (item, i) => {
    console.log(typeof item.img2, '===index===');
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(i);
        }}
        style={getChildrenStyle2(i)}
        key={i}
      >
        {/* <View style={styles.avatarImage}> */}
        <Image
          onError={() => {}}
          style={[styles.avatarImage,{
            alignSelf:'center',
            height: typeof item.img2 === 'string' ? '100%' :  hp(15),
            width:typeof item.img2 === 'string' ? "100%" : wp(10),
          }]}
          source={typeof item.img2 === 'string' ? {uri:item.img2} : item.img2}
          resizeMode={'contain'}
        />
        {/* </View> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={AuthStyle.bgcolor}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={ProfileStyles.toptabmainview}>
          <TouchableOpacity
            style={[
              ProfileStyles.toptabbutton,
              {
                backgroundColor: !IsColor ? CustomColors.orange : 'transparent',
              },
            ]}
            onPress={() => {
              SetisColor(!IsColor);
            }}
          >
            <Text style={ProfileStyles.toptabtext}>{Strings.yourphoto}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              ProfileStyles.toptabbutton,
              {
                backgroundColor: IsColor ? CustomColors.orange : 'transparent',
              },
            ]}
            onPress={() => {
              SetisColor(!IsColor);
            }}
          >
            <Text style={ProfileStyles.toptabtext}>{Strings.albums}</Text>
          </TouchableOpacity>
        </View>

        {!IsColor ? (
          <View
            style={{
              flex: 1,
              width: wp(95),
              marginVertical: hp(2.5),
              paddingBottom: hp(5),
              marginLeft:wp(4)
            }}
          >
            <StaggeredList
              data={imageURL}
              animationType={'EFFECTIVE'}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
              renderItem={({item, i}) => renderChildren(item, i)}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              width: wp(95),
              marginVertical: hp(2.5),
              paddingBottom: hp(5),
              marginLeft:wp(4)
            }}
          >
            <StaggeredList
              data={imageURL}
              animationType={'EFFECTIVE'}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
              renderItem={({item, i}) => renderChildren2(item, i)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  mainWrapperView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  activityIndicatorWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 0,
    alignSelf: 'stretch',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    borderRadius: 18,
    alignSelf: 'center',
  },
});

export default PhotosScreen;
