import React from 'react';
import { View, Image, StyleSheet, Text, } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const TextViewWithIcon = props => {
  return (
    <View style={{ height: hp('12%'), justifyContent: 'center', marginLeft: 15 }}>
      <Text style={{ fontSize: hp('5%'), fontWeight: 'bold' }}>{props.heading}</Text>
      <Text style={{ fontSize: hp('2.3%'), color: 'grey', }}>{props.subHeading}</Text>
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
