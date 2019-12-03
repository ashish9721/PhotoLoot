import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, Image } from 'react-native';
import { vh, vw, } from '../../Constants/Dimension';
import Strings from '../../Constants/Strings';


notificationData = [
    { title: Strings.heading1, time: Strings.time1ForNotification, image: require('../../Images/cross.png') },
    { title: Strings.heading2, time: Strings.time2ForNotification, image: require('../../Images/add.png') },
    { title: Strings.heading3, time: Strings.time3ForNotification, image: require('../../Images/cross.png') },
    { title: Strings.heading4, time: Strings.time4ForNotification, image: require('../../Images/cross.png') },
    { title: Strings.heading5, time: Strings.time5ForNotification, image: require('../../Images/add.png') },
]


const Notifications = (props) => {
    return (
        <SafeAreaView>
            <FlatList
                data={notificationData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={rowData => {
                    return (
                        <View>
                            <View style={styles.parent}>
                                <Image
                                    source={rowData.item.image}
                                    style={styles.firstimage}
                                />
                                <View style={styles.new}>
                                    <Text style={styles.newtext}>{rowData.item.title}</Text>
                                </View>
                            </View>
                            <View style={styles.timestyle}>
                                <Text style={styles.timetext}>{rowData.item.time}</Text>
                            </View>
                            <View style={styles.line}></View>
                        </View>
                    )
                }
                }
            />
        </SafeAreaView>

    )



}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        marginTop: vh(20)
    },
    firstimage: {
        width: vw(40),
        height: vh(40),
        borderRadius: vw(6),
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
        marginRight: vw(15)
    },
    timetext: {
        fontSize: vw(11),
    },
    line: {
        height: vh(1),
        marginTop: vh(10),
        backgroundColor: 'lightgrey',
        marginHorizontal: vh(15)
    },

})

export default Notifications;