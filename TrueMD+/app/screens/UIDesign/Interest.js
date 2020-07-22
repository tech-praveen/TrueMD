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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RoundedButton from '../../components/RoundedButton';

import NavigationBar from '../../components/NavigationBar';
import { images } from '../../assets/images';
export let navigatorObject = null;

export const interests = [
  {
    icon: images.reading,
    title: 'Reading',
    id: 1
  },
  {
    icon: images.watchningtv,
    title: 'Watching TV',
    id: 2
  },
  {
    icon: images.  family,
    title: 'Family Time',
    id: 3
  },
  {
    icon: images.movies,
    title: 'Go to movie',
    id: 4
  },
  {
    icon: images.surfing,
    title: 'Net Surfing',
    id: 5
  },
  {
    icon: images.shopping,
    title: 'Shopping',
    id: 6
  },
  {
    icon: images.traveling,
    title: 'Traveling',
    id: 7
  },
  {
    icon: images.swimming,
    title: 'Swimming',
    id: 8
  },
  {
    icon: images.eating,
    title: 'Eating Out',
    id: 9
  }
];

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

  showPassowrdText() {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  }
  // \
  continueButtonPressed() {
    this.props.navigation.navigate('HealthyInterest');
  }
  popBack() {
    this.props.navigation.pop();
  }

  renderCard = ({ item }) => (
    <View style={{ justifyContent: 'center', alignItems: 'center', margin: wp('5%') }} >
      <View style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}>
        <TouchableOpacity
          underlayColor="rgba(73,182,77,1,0.9)"
          style={{ height: hp('10%'), width: hp('10%'), backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: hp('5%') }}
        // onPress={() => this.onPressCard(item.id)}
        overflow='hidden'
        >
          <Image style={{height: hp('7%'), width: hp('7%'),}} source={item.icon} resizeMode='contain' />
        </TouchableOpacity>
        <Text style={{ width: 88, textAlign: 'center', marginTop: 5 }}>{item.title}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F6FA' }}>
        <NavigationBar
          title=''
          showBackButton={Boolean(true)}
          showRightButton={Boolean(false)}
          showLogo={false}
          // backButtonImage={images.backbutton}
          backButtonAction={() => this.popBack()}
          // backButtonAction={() => this.sideMenuAction()}
          hideRightView={true}
        />
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 60 }}>
          <Image source={images.TrueMdLogo} resizeMode='center' />
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 60, marginHorizontal: 30, marginTop: 15 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Time to customize your interests</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={interests}
            renderItem={this.renderCard}
            // extraData={this.state}
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