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
  ScrollView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RoundedButton from '../../components/RoundedButton';
import NavigationBar from '../../components/NavigationBar';
import { images } from '../../assets/images';
export let navigatorObject = null;
const profileIcons = [{
  icon: images.avtaar,
  id: 1
},
{
  icon: images.avtaar1,
  id: 2
},
{
  icon: images.avtaar2,
  id: 3
},
{
  icon: images.avtaar,
  id: 4
},
{
  icon: images.avtaar1,
  id: 5
},
{
  icon: images.avtaar2,
  id: 6
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
    width: 25,
    height: 25,
    resizeMode: 'cover',
    marginRight: 10,
    marginLeft: 5,

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


  renderCard = item => (
    <View style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
      marginHorizontal: 15
    }}>
      <TouchableOpacity
        underlayColor="rgba(73,182,77,1,0.9)"
        style={{ height: hp('10%'), width: hp('10%'), backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: hp('5%') }}
      // onPress={() => this.onPressCard(item.id)}
      >
        <Image style={{height: hp('8%'), width: hp('8%')}} source={item.icon} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );

  showPassowrdText() {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  }
  continueButtonPressed() {
    this.props.navigation.navigate('HealthImprovement');
  }
  addImage() {
    alert('WIP')
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
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 200 }}>
          <ScrollView
            horizontal={true}
            style={{ marginTop: 60 }}
            showsHorizontalScrollIndicator={false}
          >
            {profileIcons.map(item => this.renderCard(item))}
          </ScrollView>
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 50, }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Profile Picture</Text>
        </View>

        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 70, marginHorizontal: 30 }}>
          <Text style={{ fontSize: 17, color: 'grey', textAlign: 'center' }}>You can select photo from one of the emoji's or add your own photo as a profile picture </Text>
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 70, marginHorizontal: 30 }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.addImage()}
          >
            <Text style={{ textAlign: 'center', color: '#4573D6', fontWeight: 'bold', fontSize: 18 }}>Add Custom photo</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 120 }}>
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