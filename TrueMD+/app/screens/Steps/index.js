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
import GradientCircle from './Gradientcircle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { images } from '../../assets/images';
export let navigatorObject = null;
import AppleHealthKit from 'rn-apple-healthkit';


class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: props.route.params.activity,
      steps: props.route.params.stepsCount,
      distance: 0,
      calories: 0,
    };
  }

  componentDidMount() {
    AppleHealthKit.getLatestHeight(null, (err, results) => {
      if (err) {
        console.log("error getting latest height: ", err);
        return;
      }
      console.log('===========resssss', results)
    });

    let options = {
      unit: 'pound'
    };
    AppleHealthKit.getLatestWeight(options, (err, results) => {
      if (err) {
        console.log("error getting latest weight: ", err);
        return;
      }
      console.log('=-==-=-=-=-=-=-=-=-',results)
    });

    let dist = this.state.steps.value * 0.0008;
    let cal = this.state.steps.value * 0.04;

    this.setState({
      distance: dist.toFixed(2),
      calories: cal.toFixed(2),
    })
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
        <Headlines heading="Steps" subHeading="Help you lose weight" />
        <Datechanger />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
          <GradientCircle activity={this.state.activity} steps={this.state.steps} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'white', height: hp('12%'), marginHorizontal: wp('5%'), borderRadius: wp('3%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
            <Image style={{ height: 30, width: 25 }} source={images.caloriesIcon} resizeMode='contain' />
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ fontSize: hp('3.5%'), fontWeight: '800' }}>{this.state.calories}</Text>
              <Text style={{ fontSize: hp('2.8%'), marginTop: hp('0.6%') }}> kcal</Text>

            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'white', height: hp('12%'), marginHorizontal: wp('5%'), borderRadius: wp('3%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
            <Image style={{ height: 30, width: 30 }} source={images.locationIcon} resizeMode='contain' />
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: hp('3.5%'), fontWeight: '800' }}>{this.state.distance}</Text>
              <Text style={{ fontSize: hp('2.8%'), marginTop: hp('0.6%') }}> km</Text>
            </View>
          </View>
        </View>
      </View>

      // </View>
    );
  }
}

Steps.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Steps.defaultProps = {
  navigation: {},
};

export default Steps;