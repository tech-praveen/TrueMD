/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { images } from '../assets/images';
import { NavBarHeight, isIOS, isIphoneX } from '../utils/platformSpecific';
import colors from '../theme/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6FA',
    flexDirection: 'row',
    height: 80,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // alignItems: 'center',
    marginRight: 60
  },
  titleText: {
    color: colors.appRedColor,
    fontSize: 20,
    textAlign: 'center',
    // fontFamily: 'RobotoCondensed-Bold',
  },
  leftView: {
    flex: 0.18,
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  navImage: {
    width: 25,
    height: 30,
  },
  rightView: {
    flex: 0.25,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  rightInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 2,
  },
  walletAmountText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    // fontFamily: 'RobotoCondensed-Regular',
  },
  rightInfoIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

const NavBar = ({
  title,
  showBackButton,
  backButtonImage,
  backButtonAction,
  showRightButton,
  rightButtonImage,
  rightButtonAction,
  hideRightView,
  showLogo,
}) => (
  <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
      <View style={{ flex: 1.5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{ height: 30, width: 40, }}
          onPress={() => backButtonAction()}
        >
          <Image style={{ height: 18, width: 30 }} source={images.leftArrow} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 6, justifyContent: 'flex-end', alignItems: 'center', height: 50 }}>
        {showLogo && <Image source={images.TrueMdLogo} resizeMode='center' />}
      </View>
      <View style={{ flex: 1.5, height: 50, justifyContent: 'center', alignItems: 'center' }} />
    </View>
);

NavBar.propTypes = {
  title: PropTypes.string,
  leftView: PropTypes.element,
  rightView: PropTypes.element,
  showBackButton: PropTypes.bool,
  showRightButton: PropTypes.bool,
  backButtonImage: PropTypes.any,
  backButtonAction: PropTypes.func,
  rightButtonImage: PropTypes.any,
  rightButtonAction: PropTypes.func,
  hideRightView: PropTypes.bool,
};

NavBar.defaultProps = {
  title: '',
  leftView: null,
  rightView: null,
  showBackButton: false,
  showRightButton: false,
  backButtonImage: null,
  backButtonAction: () => {},
  rightButtonImage: null,
  rightButtonAction: () => {},
  hideRightView: false,
};
export default NavBar;
