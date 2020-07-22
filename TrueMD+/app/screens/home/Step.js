// 
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../assets/images';

const Step = props => {
  return (
      <TouchableOpacity onPress={() => props.onPressSteps()}>
    <View style={styles.container}>
        <LinearGradient
          colors={['#7574F3', '#7574F8']}
          style={{ height: '90%', width: '80%', borderRadius: 15, }}>
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: hp('2.8%'), color: 'white', }}>Steps</Text>
            <Image style={{ height: 20, width: 20 }} source={images.stepsIcon} resizeMode='contain' />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontSize: hp('3.5%'), color: 'white', }}>{props.steps.value}</Text>
          </View>
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', }}>
            <Image style={{ margin: 10 }} source={images.stepsGraph} resizeMode='contain' />
          </View>
        </LinearGradient>
    </View>
      </TouchableOpacity>
  )
}

export default Step;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7574F3',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.75,
    shadowRadius: 15.14,

    elevation: 17,
  },
});
