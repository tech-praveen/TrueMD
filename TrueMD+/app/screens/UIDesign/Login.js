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

} from 'react-native';

import RoundedButton from '../../components/RoundedButton';
import NavigationBar from '../../components/NavigationBar';
import CustomTextInput from '../../components/CustomTextInput';
import { InputKey, ReturnKeyType, KeyboardType } from '../../utils/constants';

import { images } from '../../assets/images';
export let navigatorObject = null;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6FA',
    flexDirection: 'row',
    height: 80,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  inputMainView: {
    justifyContent: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textInput: {
    height: 40,
    fontSize: 17,
    // marginLeft: 10,
    color: 'black',
  },
  textInputView: {
    justifyContent: 'center',
    width: '90%',
    backgroundColor: 'white',
    // marginTop: 5,
    borderRadius: 10,
  },
  emailIcon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginRight: 10,
    marginLeft: 10,
  },
});

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

  onChangeEmailText(email) {
    this.setState({ email });
  }

  onChangePasswordText(password) {
    this.setState({ password });
  }

  onSubmitEditing(key) {
    try {
      switch (key) {
        case InputKey.email:
          this.passwordInput.focus();
          break;
        case InputKey.password:
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(' error: ', error);
    }
  }

  getTextInputReference(key, reference) {
    // switch (key) {
    //   case InputKey.email:
    //     this.emailInput = reference;
    //     break;
    //   case InputKey.password:
    //     this.passwordInput = reference;
    //     break;
    //   default:
    //     break;
    // }
  }

  getValidationErrorMessage() {
    // const { email, password } = this.state;
    // // Email or Username
    // if (!email) {
    //   return commonLocalizeStrings.emptyEmailUsernameErrorMessage;
    // }
    // if (isEmailText(email)) {
    //   if (!isValidEmail(email)) {
    //     return commonLocalizeStrings.invalidEmailErrorMessage;
    //   }
    // } else if (!isValidUsername(email)) {
    //   return commonLocalizeStrings.incorrectUsernameErrorMessage;
    // }
    // // Password
    // if (!password) {
    //   return commonLocalizeStrings.emptyPasswordErrorMessage;
    // }
    // if (!isValidPassword(password)) {
    //   return commonLocalizeStrings.incorrectPasswordErrorMessage;
    // }
    return null;
  }

  loginAction() {
    // Navigation.sharedInstance().resetRouteName('ContactListScreen');
    // this.setState({
    //   verifyPhoneNumber: false,
    // });
    // const { email, password } = this.state;
    // const { userLoginRequest } = this.props;
    // const errorMessage = this.getValidationErrorMessage();
    // if (errorMessage) {
    //   showPopupAlert(errorMessage);
    // } else {
    //   isNetworkConnected((isConnected) => {
    //     if (isConnected) {
    //       userLoginRequest(email, password);
    //     }
    //   });
    // }
  }

  popBack() {
    this.props.navigation.pop();
  }

  showPassowrdText() {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  }

  navigateToHome() {
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
        <View style={{ flex: 1, marginTop: 70 }}>
          <View style={styles.inputMainView}>
            <Image style={styles.emailIcon} source={images.Email} />
            <CustomTextInput
              textInput={StyleSheet.flatten(styles.textInput)}
              inputView={StyleSheet.flatten(styles.textInputView)}
              placeholderTextColor={'grey'}
              placeholder={'Email'}
              inputKey={InputKey.email}
              getTextInputReference={(key, reference) =>
                this.getTextInputReference(key, reference)}
              keyboardType={KeyboardType.emailAddress}
              value={this.state.email}
              returnKeyType={ReturnKeyType.next}
              onChangeText={value => this.onChangeEmailText(value)}
              onSubmitEditing={key => this.onSubmitEditing(key)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputMainView}>
            <Image style={styles.emailIcon} source={images.Password} />
            <CustomTextInput
              textInput={StyleSheet.flatten(styles.textInput)}
              inputView={StyleSheet.flatten(styles.textInputView)}
              placeholder={'password'}
              placeholderTextColor={'grey'}
              inputKey={InputKey.password}
              // secureTextEntry={!isShowPassword}
              getTextInputReference={(key, reference) =>
                this.getTextInputReference(key, reference)}
              value={this.state.password}
              returnKeyType={ReturnKeyType.done}
              onChangeText={value => this.onChangePasswordText(value)}
              onSubmitEditing={key => this.onSubmitEditing(key)}
            />
          </View>
          <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 120, }}>
            <RoundedButton 
              onPressButton={() => this.navigateToHome()}
            />
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