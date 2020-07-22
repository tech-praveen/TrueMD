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

import NavigationBar from '../../components/NavigationBar';
import { images } from '../../assets/images';
export let navigatorObject = null;
import RoundedButton from '../../components/RoundedButton';


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
  
  popBack() {
    this.props.navigation.pop();
  }
  navigateToHome(){
    this.props.navigation.navigate('StackDrawer');
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
          showLogo={false}
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
                  source={images.Checkbox}
                  // source={
                  //   this.state.gender == 'male'
                  //     ? require('../../../assets/icons/fullCircle.png')
                  //     : require('../../../assets/icons/emptyCircle.png')
                  // }
                />
                <Image style={styles.icon} source={images.iconMale} />
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
                  source={images.uncheckbox}
                  // source={
                  //   this.state.gender == 'female'
                  //     ? require('../../../assets/icons/fullCircle.png')
                  //     : require('../../../assets/icons/emptyCircle.png')
                  // }
                />
                <Image style={styles.icon} source={images.iconFemale} />
                <Text style={styles.genderText}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}>
        <RoundedButton
            onPressButton={() => this.navigateToHome()}
          />
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