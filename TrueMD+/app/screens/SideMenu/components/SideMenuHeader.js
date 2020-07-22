import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
} from 'react-native';
import { images } from '../../../assets/images';
import { color, width } from '../../../config/appConfig';

const leftPadding = (Platform.OS === 'android') ? 56 : 64;

const styles = StyleSheet.create({
  viewProfileContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F6FA'
  },
  avatarStyle: {
    marginTop: 30,
    width: 150,
    marginRight: 10,
  },
  crossIcon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    height: 40,
    width: 40,
    marginLeft: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const SideMenuHeader = props => (
  <View style={styles.viewProfileContainer}>
    <View style={styles.iconContainer}>
      <Image
        style={styles.crossIcon}
        source={images.Bicycling}
        resizeMode="contain"
      />
    </View>
    <Image
      style={styles.avatarStyle}
      source={images.TrueMdLogo}
      resizeMode="contain"
    />
  </View>
);

SideMenuHeader.propTypes = {

};

SideMenuHeader.defaultProps = {

};

export default SideMenuHeader;
