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
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
const { width, height } = Dimensions.get('window');
import NavigationBar from '../../components/NavigationBar';
// import Datechanger from '../../components/Datechanger';
// import Headlines from '../../components/Headlines';

import { images } from '../../assets/images';
export let navigatorObject = null;


class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isShowPassword: false,
      verifyPhoneNumber: true,
    };
  }


  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F6FA' }}>
        <NavigationBar
          title=''
          showBackButton={Boolean(true)}
          showRightButton={Boolean(false)}
          // backButtonImage={images.backbutton}
          backButtonAction={() => this.popBack()}
          // backButtonAction={() => this.sideMenuAction()}
          hideRightView={true}
          showLogo={true}
        />
        {/* <Headlines heading="Dashboard" subHeading="Views of key performance" />
        <Datechanger /> */}
      </View>

      // </View>
    );
  }
}

Activity.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Activity.defaultProps = {
  navigation: {},
};

export default Activity;