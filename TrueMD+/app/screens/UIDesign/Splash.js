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
  Dimensions,
  ImageBackground
} from 'react-native';
// import NavigationBar from '../../components/NavigationBar';
import {images} from '../../assets/images';
export let navigatorObject = null;

class Splash extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
  }

  componentDidMount() {
    console.log(' this.props.navigation: ',  this.props.navigation);
    // setTimeout(function(){ this.sideMenuAction() }, 3000);
  }
  sideMenuAction() {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={images.Splash} style={{ flex: 1, height: '100%'}} />
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
