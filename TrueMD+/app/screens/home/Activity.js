import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../assets/images';

const Activity = props => {
  console.log('----', props);
  return (
      <TouchableOpacity  onPress={() => props.onPressActivity()}>
    <View style={styles.container}>
        <LinearGradient
          colors={['#FD9C47', '#FD9C65']}
          style={{ height: '90%', width: '80%', borderRadius: 15, }}
        >
          <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: hp('2.8%'), color: 'white', }}>Activity</Text>
            <Image style={{ height: 20, width: 20 }} source={images.activityIcon} resizeMode='contain' />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
  <Text style={{ fontSize: hp('3.5%'), color: 'white', }}>{props.activity.length > 0 ? props.activity[0].activity : 0}</Text>
          </View>
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', }}>
            <Image style={{ margin: 10 }} source={images.Graph} resizeMode='contain' />
          </View>
        </LinearGradient>
    </View>
      </TouchableOpacity>
  )
}

export default Activity;

const styles = StyleSheet.create({
  container: {

    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FD9C47',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.75,
    shadowRadius: 15.14,

    elevation: 17,
  },

});
