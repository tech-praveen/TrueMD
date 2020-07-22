/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import { images } from '../../assets/images';
export let navigatorObject = null;
import AppleHealthKit from 'rn-apple-healthkit';


const permissiOptions = {
  permissions: {
    read: ["Height", "Weight", "StepCount", "Steps", "DateOfBirth", "BodyMassIndex", "HeartRate", "SleepAnalysis"],
    write: ["Weight", "StepCount", "BodyMassIndex"]
  }
};

class Splash extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
  }

  componentDidMount() {
    AppleHealthKit.initHealthKit(permissiOptions, (err, results) => {
      if (err) {
          console.log("error initializing Healthkit: ", err);
          return;
      } 
  });
    console.log(' this.props.navigation: ', this.props.navigation);
    // setTimeout(function(){ this.sideMenuAction() }, 3000);
  }
  sideMenuAction() {
    this.props.navigation.navigate('Home');
  }
  navigateToLogin(){
    this.props.navigation.navigate('Login');
  }

  navigateToSignUp(){
    this.props.navigation.navigate('SignUp');
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F6FA' }}>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 70 }}>
          <Text style={{ fontSize: 17, color: 'grey', }}>Welcome to</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 50 }}>
          <Image source={images.TrueMdLogo} resizeMode='center' />
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 50, marginHorizontal: 30 }}>
          <Text style={{ fontSize: 17, color: 'grey', textAlign: 'center' }}>Nulla finibus mi id nulla venenatis, eu interdum augue euismod.</Text>
        </View>
        <Image style={{ flex: 1, width: '100%'}} source={images.Workout} resizeMode='contain' />
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 150 }}>
        <RoundedButton 
              onPressButton={() => this.navigateToSignUp()}
            />
          <View style={{ justifyContent: 'center', alignItems: 'center', height: 60, flexDirection: 'row' }}>
          <Text style={{ fontSize: 17, color: 'grey', textAlign: 'center' }}>Already have an account? </Text>
          <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.navigateToLogin()}
            >
         <Text style={{textAlign: 'center', color: '#4573D6', fontWeight: 'bold', fontSize: 18}}>Login</Text>
         </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Splash.defaultProps = {
  navigation: {},
};

export default Splash;
