import React from 'react';
import { View, Image, StyleSheet, Text, } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const TextViewWithIcon = props => {
  return (
    <View style={styles.container}>
      <Image
        source={props.icon}
        style={[styles.calenderClockTeamIcon, props.imageStyle]}
        resizeMode="contain" />
      <Text
        style={[styles.calenderAndDateText, props.textStyle]}>
        {props.title}
      </Text>
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
