import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { images } from '../assets/images';


const TextViewWithIcon = props => {
  return (
    <View style={{ height: 40, flexDirection: 'row' }}>
      <View style={{ flex: 1.5, height: 40, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.9}
        // style={{ height: 30, width: 40 }}
        // onPress={() => showMenuButton()}
        >
          <Image style={{ height: 18, width: 30 }} source={images.leftArrow} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 6, justifyContent: 'flex-end', alignItems: 'center', height: 40 }}>
        <Text style={{ fontSize: 20, color: 'grey', height: 40, top: 7 }}>TODAY</Text>
      </View>
      <View style={{ flex: 1.5, height: 40, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.9}
        // onPress={() => showProfile()}
        >
          <Image style={{ height: 18, width: 30, borderRadius: 20 }} source={images.rightArrow} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TextViewWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  calenderClockTeamIcon: {
    width: wp('5%'), // width: 14.93,  
    height: hp('2%'),  // height:14,
    // marginRight: 5,
  },
  calenderAndDateText: {
    color: 'gray',
    fontSize: wp('3.3%'),
    marginLeft: 10,
    justifyContent: 'center'

  },
});
