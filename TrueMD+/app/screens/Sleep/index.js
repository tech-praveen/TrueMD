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
import Datechanger from '../../components/Datechanger';
import Headlines from '../../components/Headlines';
import GradientCircle from './GradientCircle';
import RoundedButton from '../../components/RoundedButton';

import { images } from '../../assets/images';
export let navigatorObject = null;

class Sleep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sleep: props.route.params.sleepDate
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
        <Headlines heading="Sleep" subHeading="Help you for healthy skin" />
        <Datechanger />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
          <GradientCircle sleep={this.state.sleep} />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onPressButton()}
            disabled={true}
            style={{
              height: 50, width: '75%', backgroundColor: '#4573D6', justifyContent: 'center', alignItems: 'center', borderRadius: 25,

            }}
          >
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      // </View>
    );
  }
}

Sleep.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Sleep.defaultProps = {
  navigation: {},
};

export default Sleep;