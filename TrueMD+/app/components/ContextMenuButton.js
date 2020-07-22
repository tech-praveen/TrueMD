import React from 'react';
import {
  TouchableOpacity,
  Image,Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  contextMenuButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 30,
    width: 30,
    marginRight: 5,
  },
  iconSize: {
    height: 30,
    width: 30,
  }
});

const ContextMenuButton = (props) => (
  <TouchableOpacity
    style={styles.contextMenuButton}
    onPress={() => props.onPress()}
  >
    {/* <Image
      source={props.icon}
      stlye={{height: 20, width: 20}}
      resizeMode="contain" 
      /> */}
      <Text>TT</Text>
  </TouchableOpacity>
);

ContextMenuButton.propTypes = {
  onPress: PropTypes.func,
};

ContextMenuButton.defaultProps = {
  onPress: () => { },
};

export default ContextMenuButton;
