import React from 'react';
import { View, Image, StyleSheet, Text, } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../assets/images';


const GradientCircle = props => {
    var fivePer = ['#7574F3', '#D3D3D3',]
    // {props.steps.value}
    return (
        <View>
            <LinearGradient
                colors={fivePer}
                style={{ height: wp('70%'), width: wp('70%'), borderRadius: wp('35%'), justifyContent: 'center', alignItems: 'center' }}
                start={{ x: 0.0, y: 0.80 }} end={{ x: 0.90, y: 0.40 }}
                locations={[0.1, 0.9]}
            >

                <View style={{ height: wp('66%'), width: wp('66%'), borderRadius: wp('33%'), backgroundColor: '#F5F6FA', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: wp('30%'), width: wp('20%') }} source={images.runningIcon} resizeMode='contain' />
                    <Text style={{ fontSize: hp('8.5%') }}>{props.steps.value}</Text>
                </View>
            </LinearGradient>
            <View style={{ height: 50, width: wp('70%'), backgroundColor: '#F5F6FA', top: wp('-10%'), flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: hp('2.3%'), color: 'grey', }}>Duration</Text>
                    <Text style={{ fontSize: hp('3%'), fontWeight: '600' }}>{props.activity[0].activity}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: hp('2.3%'), color: 'grey', }}>Goal</Text>
                    <Text style={{ fontSize: hp('3%'), fontWeight: '600' }}>8000</Text>
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
