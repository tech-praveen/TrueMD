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
  SafeAreaView,
  TouchableOpacity,
  NativeAppEventEmitter
} from 'react-native';
// import { NavigationActions } from 'react-navigation';
import StatusBar from '../../components/StatusBar';
const { width, height } = Dimensions.get('window');
import NavigationBar from '../../components/NavigationBar';
import { images } from '../../assets/images';
import AppleHealthKit from 'rn-apple-healthkit';
import Header from '../../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Activity from './Activity';
import Pulse from './Pulse';
import Sleep from './Sleep';
import Steps from './Step';
import moment from 'moment-timezone';
import Datechanger from '../../components/Datechanger';
import Headlines from '../../components/Headlines';

let options = {
  permissions: {
    read: ["Height", "Weight", "StepCount", "Steps", "DateOfBirth", "BodyMassIndex", "HeartRate", "SleepAnalysis"],
    write: ["Weight", "StepCount", "BodyMassIndex"]
  }
};


export let navigatorObject = null;

class Home extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
    this.state = {
      steps: { value: 0 },
      pulsedata: [],
      sleepData: [],
      activity: [],
      age: 0,
    };
  }

  componentDidMount() {
    AppleHealthKit.initHealthKit(options, (err, results) => {
      if (err) {
        console.log("error initializing Healthkit: ", err);
        return;
      }
      AppleHealthKit.initStepCountObserver({}, () => { });
      AppleHealthKit.setObserver({ type: 'Walking' });
      NativeAppEventEmitter.addListener(
        'observer',
        this._fetchStepCountData()
      );

      AppleHealthKit.getDateOfBirth(null, (err, results) => {
        console.log('=-=-==-=-=-=-=-=--',results)
        this.setState({
          age: results.age,
        })
      });

      this.getStepData();
      this.getHeartRateData()
      this.getSleepData()

    });

  }

  _fetchStepCountData() {
    let options = {
      startDate: (new Date(2020, 5, 1)).toISOString(), // required
      endDate: (new Date()).toISOString(), // optional; default now
    };

    AppleHealthKit.getSamples(options, (err, results) => {
      if (err) {
        return;
      }
    });
  }

  getTimeFromMins(mins) {
    // do not include the first validation check if you want, for example,
    // getTimeFromMins(1530) to equal getTimeFromMins(90) (i.e. mins rollover)
    if (mins >= 24 * 60 || mins < 0) {
      throw new RangeError("Valid input should be greater than or equal to 0 and less than 1440.");
    }
    var h = mins / 60 | 0,
      m = mins % 60 | 0;
    var string = `${h}h ${m}m`;
    return string
    // return moment.utc().hours(h).minutes(m).format("hh:mm");
  }

  getSleepData() {

    let Sleepdata = {
      startDate: (new Date(2020, 5, 1)).toISOString(), // required
      endDate: (new Date()).toISOString(), // optional; default now
      limit: 10, // optional; default no limit
    };

    AppleHealthKit.getSleepSamples(Sleepdata, (err, samples) => {
      if (err) {
        return;
      }
      let sleep = []
      samples.map(dates => {

        let dt1 = moment(dates.startDate);
        let dt2 = moment(dates.endDate);

        var minuts = dt2.diff(dt1, 'minutes');
        var activHrs = 1440 - minuts;
        var getActiveHr = this.getTimeFromMins(activHrs);
        var hours = this.getTimeFromMins(minuts);

        sleep.push({
          value: hours,
          activity: getActiveHr,
          svg: {
            fill: 'white',
            opacity: 0.5
          },
        })

      })
      this.setState({
        sleepData: sleep,
      })
      // use samples ...
    });

  }

  getHeartRateData() {
    let Heartratedata = {
      unit: 'bpm', // optional; default 'bpm'
      startDate: (new Date(2020, 4, 27)).toISOString(), // required
      endDate: (new Date()).toISOString(), // optional; default now
      // ascending: false, // optional; default false
      // limit: 10, // optional; default no limit
    };

    AppleHealthKit.getHeartRateSamples(Heartratedata, (err, results) => {
      if (err) {
        return;
      }
      let localarr = []
      results.map(data => {
        localarr.push(data.value)
      })
      this.setState({
        pulsedata: localarr
      })
    });
  }


  getStepData() {
    let d = new Date();
    let Steps_date = {
      date: d.toISOString()
    };
    let options = {
      startDate: (new Date(2020, 5, 1)).toISOString(), // required
      endDate: (new Date()).toISOString() // optional; default now
    };

    AppleHealthKit.getStepCount(options, (err, steps) => {
      if (err) {
        return;
      }
      this.setState({ steps: steps })
      // steps.value is the step count for day 'd'
    });
  }

  sideMenuAction() {
    this.props.navigation.openDrawer();
  }

  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }
  onClickProfile() {
    alert('WIP')
  }

  onPressActivity() {
    this.props.navigation.navigate('Activity');
  }

  onPressPulse() {
    this.props.navigation.navigate('Pulse', { age: this.state.age,  pulse: this.state.pulsedata });
  }

  onPressSleep() {
    this.props.navigation.navigate('Sleep', { sleepDate: this.state.sleepData });
  }
  onPressSteps() {
    this.props.navigation.navigate('Steps', { stepsCount: this.state.steps, activity: this.state.sleepData });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F4F6FA' }}>
        <Header
          showMenuButton={() => this.sideMenuAction()}
          showProfile={() => this.onClickProfile()}
        />
        <Headlines heading="Dashboard" subHeading="Views of key performance" />
        <Datechanger />
        <SafeAreaView style={{ flex: 4, flexDirection: 'row' }}>
          <View style={{ flex: 1, }}>
            <View style={{ flex: 1.2, }}>
              <Activity activity={this.state.sleepData} onPressActivity={() => this.onPressActivity()} />
            </View>
            <View style={{ flex: 1, }}>
              <Sleep sleep={this.state.sleepData} onPressSleep={() => this.onPressSleep()} />
            </View>
          </View>
          <View style={{ flex: 1, }}>
            <View style={{ flex: 1, }}>
              <Steps steps={this.state.steps} onPressSteps={() => this.onPressSteps()} />
            </View>
            <View style={{ flex: 1.2, }}>
              <Pulse pulse={this.state.pulsedata} onPressPulse={() => this.onPressPulse()} />
            </View>

          </View>
        </SafeAreaView>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Home.defaultProps = {
  navigation: {},
};

export default Home;
