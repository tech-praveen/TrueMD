import React from 'react';
import { View, Image, StyleSheet, Text, } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';



const GradientCircle = props => {
    var fivePer = ['#754AA7', '#D3D3D3',]
    return (
        <View>
            <LinearGradient
                colors={fivePer}
                style={{ height: wp('70%'), width: wp('70%'), borderRadius: wp('35%'), justifyContent: 'center', alignItems: 'center' }}
                start={{ x: 0.0, y: 0.80 }} end={{ x: 0.90, y: 0.40 }}
                locations={[0.1, 0.9]}
            >

                <View style={{ height: wp('66%'), width: wp('66%'), borderRadius: wp('33%'), backgroundColor: '#F5F6FA' }}>

                </View>
            </LinearGradient>
            <View style={{ height: 50, width: wp('70%'), backgroundColor: '#F5F6FA', top: wp('-10%'), flexDirection: 'row' }}>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: hp('2.3%'), color: 'grey', }}>Time Asleep</Text>
                    <Text style={{ fontSize: hp('3%'), fontWeight: '600' }}>{props.sleep.length > 0 ? props.sleep[0].value : 0}</Text>
                </View>

            </View>
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
