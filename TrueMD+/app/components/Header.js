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
import { HeaderHeight, isIOS, isIphoneX } from '../utils/platformSpecific';
import colors from '../theme/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
});

const Header = ({
  showMenuButton,
  showProfile,
}) => (
    <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
      <View style={{ flex: 1.5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{ height: 30, width: 40, }}
          onPress={() => showMenuButton()}
        >
          <Image style={{ height: 25, width: 30 }} source={images.menu} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 6, justifyContent: 'flex-end', alignItems: 'center', height: 50 }}>
        <Image source={images.TrueMdLogo} resizeMode='center' />
      </View>
      <View style={{ flex: 1.5, height: 50, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => showProfile()}
        >
          <Image style={{ height: 40, width: 40, borderRadius: 20 }} source={images.avtaar} />
        </TouchableOpacity>
      </View>

    </View>
  );


export default Header;
