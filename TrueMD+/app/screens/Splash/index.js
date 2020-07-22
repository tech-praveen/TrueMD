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
// import { NavigationActions } from 'react-navigation';
// import ContainerView from './components/ContainerView';
// import Utils from '../../utils/utils';
// import StatusBar from '../../components/StatusBar';
const { width, height } = Dimensions.get('window');
import NavigationBar from '../../components/NavigationBar';
// import CustomTextInput from '../../components/CustomTextInput';
// import { InputKey, ReturnKeyType, KeyboardType } from '../../utils/constants';

import { images } from '../../assets/images';
export let navigatorObject = null;

export const interests = [
  {
    title: 'Walking',
    id: 1
  },
  {
    title: 'Running',
    id: 2
  },
  {
    title: 'Golf',
    id: 3
  },
  {
    title: 'Exercise',
    id: 4
  },
  {
    title: 'Team sports',
    id: 5
  },
  {
    title: 'Gardening',
    id: 6
  },
  {
    title: 'Bicycling',
    id: 7
  },
  {
    title: 'Swimming',
    id: 8
  },
  {
    title: 'Etiing Out',
    id: 9
  }
];

// import { StyleSheet, Dimensions } from 'react-native';
// import { registration } from '../../AppStyles';

// // screen sizing
// const { width, height } = Dimensions.get('window');
// const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  // container: registration.container,
  middleContainer: {
    flex: 1,
    alignSelf: 'center'
  },
  mainText: {
    fontSize: 24,
    margin: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2d3142'
  },
  secText: {
    margin: 5,
    fontSize: 17,
    textAlign: 'center',
    color: '#9c9eb9'
  },
  rowContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '95%'
  },
  iconContainer: {
    backgroundColor: '#ffff',
    margin: 10,
    width: '40%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffff',
    padding: 10
  },
  icon: {
    width: 50,
    height: 90,
    alignSelf: 'center'
  },
  textContainer: {
    margin: 20,
    alignSelf: 'center',
    width: '90%'
  },
  genderText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2d3142'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 30,
    position: 'absolute',
    top: 2,
    right: 2
  }
});

// export default styles;

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isShowPassword: false,
      verifyPhoneNumber: true,
    };
  }

  showPassowrdText() {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  }
  
  renderCard = ({ item }) => (
    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15}}>
      <TouchableOpacity
        underlayColor="rgba(73,182,77,1,0.9)"
        style={{ height: 90, width: 90, backgroundColor: 'red',  justifyContent: 'center', alignItems: 'center', borderRadius: 45 }}
        // onPress={() => this.onPressCard(item.id)}
      >
        {/* <Image style={styles.cardImg} source={{ uri: item.icon }} /> */}
      </TouchableOpacity>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F6FA' }}>
        <NavigationBar
          title=''
          showBackButton={Boolean(true)}
          showRightButton={Boolean(false)}
          // backButtonImage={images.backbutton}
          // backButtonAction={() => this.popBack()}
          // backButtonAction={() => this.sideMenuAction()}
          hideRightView={true}
        />
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 60 }}>
          <Image source={images.TrueMdLogo} resizeMode='center' />
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 60, marginHorizontal: 30, marginTop: 15 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Which one are you?</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 70, marginHorizontal: 30 }}>
          <Text style={{ fontSize: 17, color: 'grey', }}>To give you a better experience we need to know your gender</Text>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              underlayColor="rgba(73,182,77,1,0.9)"
              style={styles.iconContainer}
              onPress={() => this.setState({ gender: 'male' })}
            >
              <View>
                <Image
                  style={styles.circle}
                  source={images.TrueMdLogo}
                  // source={
                  //   this.state.gender == 'male'
                  //     ? require('../../../assets/icons/fullCircle.png')
                  //     : require('../../../assets/icons/emptyCircle.png')
                  // }
                />
                <Image style={styles.icon} source={images.TrueMdLogo} />
                <Text style={styles.genderText}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              underlayColor="rgba(73,182,77,1,0.9)"
              style={styles.iconContainer}
              onPress={() => this.setState({ gender: 'female' })}
            >
              <View>
                <Image
                  style={styles.circle}
                  source={images.TrueMdLogo}
                  // source={
                  //   this.state.gender == 'female'
                  //     ? require('../../../assets/icons/fullCircle.png')
                  //     : require('../../../assets/icons/emptyCircle.png')
                  // }
                />
                <Image style={styles.icon} source={images.TrueMdLogo} />
                <Text style={styles.genderText}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.navigateToSignUp()}
            style={{ height: 50, width: '70%', backgroundColor: '#4573D6', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}
          >
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      // </View>
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