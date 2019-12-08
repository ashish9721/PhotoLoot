import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { vh, vw } from '../../Constants';
export default class Notifications extends React.Component {
    // State = {
    //     data: [
    //         { id: 1, text: 'Manny Dolores voted for your photo in “Beach Happy”challenge.', time: '2m ago' },
    //         { id: 2, text: 'New challenge “Roads less travelled” added in upcoming challenges.', time: '15m ago' },
    //         { id: 3, text: 'Peter Caullins started following you', time: '2h ago' },
    //         { id: 4, text: 'Peter Caullins voted for your photo in “Beach Happy”challenge', time: '2h ago' },
    //         { id: 5, text: 'Challnge “7 Wonders of world”  now active in current challenges.', time: '10h ago' },
    //     ]
    // }
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.firstview}>
                    <View style={styles.firstimage}></View>
                    <View style={styles.manny}></View>
                    <View style={styles.timestyle}></View>
                </View>
            </View>


        )



    }
}

const styles = StyleSheet.create({
    parent:{
      marginTop:vh(100)
    },
    firstview: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    firstimage: {
        width: vw(40),
        height: vh(40),
        backgroundColor: 'red',
        marginLeft:vw(15)
    },
    manny:{
        width:vw(297),
        height:vh(27),
        backgroundColor:'black',
    },
    timestyle:{
        alignSelf:'flex-end',
        width:vw(35),
        height:vh(9),
        backgroundColor:'pink',
        marginRight:vw(16)
    }
})