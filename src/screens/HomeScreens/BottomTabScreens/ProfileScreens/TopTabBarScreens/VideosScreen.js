//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
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
import Video from 'react-native-video';

// create a component
const VideosScreen = () => {

  const imageURL = [
    {
      vide: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    },
    {
      vide: 'http://s3.amazonaws.com/jl-s3/5-style%20(1).mp4',
    },
    {
      vide: 'http://s3.amazonaws.com/jl-s3/1-star%20(1).mp4',
    },
    {
      vide: 'http://s3.amazonaws.com/jl-s3/2-fan%20(1).mp4',
    },
    {
      vide: 'http://s3.amazonaws.com/jl-s3/3-chef%20(1).mp4',
    },
    {
      vide: 'http://s3.amazonaws.com/jl-s3/4-food%20(1).mp4',
    },
    {
      vide: 'http://s3.amazonaws.com/jl-s3/6-shopping.mp4',
    },
    {
      vide: 'http://s3.amazonaws.com/jl-s3/8-athlete%20(1).mp4',
    },
  ];

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
      overflow: 'hidden',
      backgroundColor: CustomColors.white,
    };
  };

  const renderChildren = (item, i) => {
    console.log(item.vide, i, '===index===');
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(item);
        }}
        style={getChildrenStyle(i)}
        key={i}
      >
        <Video
          repeat={true}
          volume={0}
          rate={1.0}
          resizeMode="stretch"
          source={{uri: item.vide}} // Can be a URL or a local file.
          style={styles.backgroundVideo}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            resizeMode="contain"
            style={{height: hp(5), width: hp(5), alignSelf: 'center'}}
            source={Img.playbutton}
          />
        </View>

   
      </TouchableOpacity>
    );
  };

  return (
    <View style={AuthStyle.bgcolor}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          width: wp(95),
          marginLeft: wp(4),
          paddingBottom:hp(8)
        }}
      >
        {/* 
   <View style={Homestyle.NoPostTextView}>
              <Text style={Homestyle.NoPostTextStyle}>{Strings.novideos}</Text>
            </View>  */}

        <Text
          style={{
            color: CustomColors.white,
            fontSize: hp(2.5),
            alignSelf: 'center',
            paddingVertical: hp(2),
          }}
        >
          {Strings.yourvideo}
        </Text>
        <StaggeredList
          data={imageURL}
          animationType={'EFFECTIVE'}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({item, i}) => renderChildren(item, i)}
        />
        {/* </View> */}
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});

export default VideosScreen;
