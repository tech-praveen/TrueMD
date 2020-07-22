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
import AppleHealthKit from 'rn-apple-healthkit';

import { images } from '../../assets/images';
export let navigatorObject = null;


class Pulse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.route.params.age,
      pulse: props.route.params.pulse,
      getfatburn: 0,
    };
  }

  componentDidMount() {
    console.log('============', this.state.pulse);
    // // let data = 220 – this.state.age * 0.66
    // this.setState({

    // })
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
          backButtonAction={() => this.popBack()}
          hideRightView={true}
          showLogo={true}
        />
        <Headlines heading="Pulse" subHeading="Help you pulse rate" />
        <Datechanger />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
          <GradientCircle pulse={this.state.pulse}/>
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
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>Calculate</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

Pulse.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Pulse.defaultProps = {
  navigation: {},
};

export default Pulse;