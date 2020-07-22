import React from 'react';
// import * as AppConstant from '@constants'
import { TextField } from 'react-native-material-textfield';
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default (props) => {
  return (
    <TextField
      {...props}
      autoCorrect={false}
      labelFontSize={wp('4%')}
      // fontFamily={AppConstant.Fonts.quicksand_bold}
      fontSize={props.value ? wp('6%') : wp('4%')}
      labelPadding={wp('2%')}
      inputContainerPadding={wp('4.2%')}
      titleFontSize={16}
      inputContainerStyle={{
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        // fontWeight: null
      }}
      containerStyle={{
        marginBottom: 0,
      }}
      style={{
        fontWeight: null
      }}
      labelTextStyle={{
        fontWeight: null,
        // fontFamily: AppConstant.Fonts.quicksand_medium
      }}
      baseColor={'grey'}
      tintColor={'grey'}
      textColor={'#00579e'}
    />
  )
}
