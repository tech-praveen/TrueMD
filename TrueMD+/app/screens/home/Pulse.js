// 
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../assets/images';

const Pulse = props => {
  return (
      <TouchableOpacity onPress={() => props.onPressPulse()}>
    <View style={styles.container}>
        <LinearGradient
          colors={['#FD66B2', '#FD66c2']}
          style={{ height: '90%', width: '80%', borderRadius: 15, }}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: hp('2.8%'), color: 'white', }}>Pulse</Text>
            <Image style={{ height: 20, width: 20 }} source={images.pulseIcon} resizeMode='contain' />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontSize: hp('3.5%'), color: 'white', }}>{props.pulse.length > 0 ? props.pulse[0] : 0} bpm</Text>
          </View>
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', }}>
            <Image style={{ margin: 10 }} source={images.pulseGraph} resizeMode='contain' />
          </View>
        </LinearGradient>
    </View>
      </TouchableOpacity>
  )
}

export default Pulse;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FD66B2',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.75,
    shadowRadius: 15.14,

    elevation: 17,
  },
});
