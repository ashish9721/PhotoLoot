import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import Strings from '../../Constants/Strings';
import {styles} from './styles';

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

export default Notifications;