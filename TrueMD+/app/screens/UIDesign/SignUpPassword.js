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
    // color: 'red',
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
  termsConditionInnerContainer: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  checkImage: {
    marginRight: 10
  },
  termsConditionsNormalText: {
    color: '#9597B9'
  }

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
  continueButtonPressed() {
    this.props.navigation.navigate('TermAndCondition');
  }

  showPassowrdText() {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  }

  popBack() {
    this.props.navigation.pop();
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
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 50, }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Now let's setup your password</Text>
        </View>
        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={styles.inputMainView}>
            <Image style={styles.emailIcon} source={images.Password} />
            <CustomTextInput
              textInput={StyleSheet.flatten(styles.textInput)}
              inputView={StyleSheet.flatten(styles.textInputView)}
              placeholderTextColor={'grey'}
              placeholder={'Enter your password'}
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
              placeholder={'Confirm your password'}
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
          <View style={{ marginTop: 30, marginLeft: 45, justifyContent: 'center' }}>

            <View style={styles.termsConditionInnerContainer}>
              <TouchableOpacity
                style={styles.checkImage}
                onPress={() => {
                  this.toggleAge()
                }}>
                <Image source={images.uncheckbox}
                />
              </TouchableOpacity>
              <View style={styles.termContainer}>
                <Text style={styles.termsConditionsNormalText}>
                  {'8+ Character'}
                </Text>
              </View>
            </View>

            <View style={styles.termsConditionInnerContainer}>
              <TouchableOpacity
                style={styles.checkImage}
                onPress={() => {
                  this.toggleAge()
                }}>
                <Image source={images.uncheckbox}
                />
              </TouchableOpacity>
              <View style={styles.termContainer}>
                <Text style={styles.termsConditionsNormalText}>
                  {'At least 1 uppercase'}
                </Text>
              </View>
            </View>

            <View style={styles.termsConditionInnerContainer}>
              <TouchableOpacity
                style={styles.checkImage}
                onPress={() => {
                  this.toggleAge()
                }}>
                <Image source={images.uncheckbox}
                />
              </TouchableOpacity>
              <View style={styles.termContainer}>
                <Text style={styles.termsConditionsNormalText}>
                  {'At least 1 uppercase'}
                </Text>
              </View>
            </View>
          </View>

          <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 120 }}>
          <RoundedButton 
              onPressButton={() => this.continueButtonPressed()}
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