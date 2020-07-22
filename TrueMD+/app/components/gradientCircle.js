import React from 'react';
import { View, Image, StyleSheet, Text, } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';



const GradientCircle = props => {
    var fivePer = ['#FD9C47', '#D3D3D3',]
    return (
        <View>
        <LinearGradient
            colors={fivePer}
            style={{ height: 200, width: 200, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
            start={{ x: 0.0, y: 0.80 }} end={{ x: 0.90, y: 0.40 }}
            locations={[0.1, 0.9]}
        >

            <View style={{ height: 192, width: 192, borderRadius: 100, backgroundColor: 'white' }}>

                </View>
        </LinearGradient>
        <View style={{height: 50, width: 200,  backgroundColor: '#F5F6FA', top: -25}}></View>
        </View>
    )
}

export default GradientCircle;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
    },
    calenderClockTeamIcon: {
        width: wp('5%'), // width: 14.93,  
        height: hp('2%'),  // height:14,
        // marginRight: 5,
    },
    calenderAndDateText: {
        color: 'gray',
        fontSize: wp('3.3%'),
        marginLeft: 10,
        justifyContent: 'center'

    },
});
