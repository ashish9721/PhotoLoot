import React from 'react';
import { View, StyleSheet, Text,SafeAreaView } from 'react-native';
import { vh, vw } from '../../Constants/Dimension';
export default class Notifications extends React.Component {
    // State = {
    //     data: [
    //         { id: 1, text: 'Manny Dolores voted for your photo in “Beach Happy”challenge.', time: '2m ago' },
    //           { id: 2, text: 'New challenge “Roads less travelled” added in upcoming challenges.', time: '15m ago' },
    //           { id: 3, text: 'Peter Caullins started following you', time: '2h ago' },
    //           { id: 4, text: 'Peter Caullins voted for your photo in “Beach Happy”challenge', time: '2h ago' },
    //           { id: 5, text: 'Challnge “7 Wonders of world”  now active in current challenges.', time: '10h ago' },
    //     ]
    // }
    render() {
        return (
            <SafeAreaView>
            <View style={styles.parent}>
                <View style={{flexDirection:'row',marginTop:vh(20)}}>
                <View style={styles.firstimage}></View>
                <View style={styles.new}>
                    <Text style={styles.newtext}>New challenge “Roads less travelled” added in upcoming challenges.</Text>
                </View>
                </View>
                <View style={styles.timestyle}>
                    <Text style={styles.timetext}>15m ago</Text>
                </View>
                <View style={styles.line}></View>
            </View>
            </SafeAreaView>

        )



    }
}

const styles = StyleSheet.create({
    parent: {
        height: vh(80),
    },
    // firstview: {
    //     flexDirection: 'row',
    // },
    firstimage: {
        width: vw(40),
        height: vh(40),
        borderRadius: vw(6),
        backgroundColor: 'red',
        marginLeft: vw(15)
    },
    new: {
        width: vw(260),
        marginLeft: vw(9)
    },
    newtext: {
        fontSize: vw(12),
    },
    timestyle: {
        alignSelf: 'flex-end',
    },
    timetext: {
        fontSize: vw(11),
        marginRight
    },
    line: {
        height: vh(1),
        marginTop:vh(10),
        backgroundColor: 'lightgrey',
        marginHorizontal:vh(10)
      
    }
})