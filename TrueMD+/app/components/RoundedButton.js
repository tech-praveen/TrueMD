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

const RoundedButton = ({
  onPressButton,
}) => (
    <View style={{
      height: 50,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => onPressButton()}
        style={{
          height: 50, width: '75%', backgroundColor: '#4573D6', justifyContent: 'center', alignItems: 'center', borderRadius: 25,

        }}
      >
        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );


export default RoundedButton;
