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
// const { width, height } = Dimensions.get('window');
// import CustomTextInput from '../../components/CustomTextInput';
// import { InputKey, ReturnKeyType, KeyboardType } from '../../utils/constants';

import NavigationBar from '../../components/NavigationBar';
import { images } from '../../assets/images';
import RoundedButton from '../../components/RoundedButton';

export let navigatorObject = null;

const healthdata = [
  {
      id: 1,
      title: 'Weight Loss',
  },
  {
      id: 2,
      title: 'Want to be more fit'
  }, 
  {
      id: 3,
      title: 'Want to improve heart health'
  },
  {
      id: 4,
      title: 'Want my hormones back'
  },
  {
      id: 5,
      title: 'Want to stop smoking'
  },
  {
      id: 6,
      title: 'Want healthy supplements'
  },
  {
      id: 7,
      title: 'Want batter memory?'
  },
  {
      id: 8,
      title: 'Want the best exercise'
  },
  {
      id: 9,
      title: 'Want to sleep better'
  },
  {
      id: 10,
      title: 'Want more energy'
  },
  {
      id: 11,
      title: 'Want better lbido/sex'
  },
  {
      id: 12,
      title: 'Want to live longer'
  },
  
]

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
    justifyContent: 'space-between',
    height: 60,
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
    color: 'red',
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

  showPassowrdText() {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  }
  
  renderIntialMedicalDetail(data) {
    console.log('data: ', data.item.title);
    return(
        <View style={styles.inputMainView}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17, marginLeft: 10 }}>{data.item.title}</Text>
            <Image style={styles.emailIcon} source={images.uncheckbox} />
          </View>

    )
  }
  continueButtonPressed() {
    this.props.navigation.navigate('Interest');
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
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 60, marginHorizontal: 30, marginTop: 15 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Let us know how we can help you</Text>
        </View>

        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 40, marginHorizontal: 30 }}>
          <Text style={{ fontSize: 17, color: 'grey', textAlign: 'center' }}>You always can change this later </Text>
        </View>
          <View style={{flex: 1}}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={healthdata}
            renderItem={(item) => this.renderIntialMedicalDetail(item)}
            extraData={this.state}
            keyExtractor={item => `${item.id}`}
          />
          </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}>
        <RoundedButton
            onPressButton={() => this.continueButtonPressed()}
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