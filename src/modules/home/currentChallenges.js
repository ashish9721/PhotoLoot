

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { PrizeViews, Description, Rules, CityLights } from './functional'
import { vw, vh, Images, color, DesignHeight } from '../../Constants'
import { ScrollView } from 'react-native-gesture-handler'

// currently working
export default class CurrentChallenges extends Component {
    render() {
        return (
            <>
                <View
                    style={styles.imgContainer} />
                <ScrollView
                    style={styles.scrollView}
                    bounces={false}
                    contentInset={{ top: 0, right: 0, left: 0, bottom: vh(0) }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.container}>
                    <CityLights />
                    <PrizeViews />
                    <Description />
                    <Rules />
                    
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({

    imgContainer: {
        width: vw(375),
        height: vh(192),
        backgroundColor: 'green',
        position:'absolute'

    },
    container: {
        paddingHorizontal: vw(15),
        justifyContent: 'center',

    },
    scrollView: {
        marginTop: vh(186),
        // position: 'absolute',
        backgroundColor: 'white',
        borderTopLeftRadius: vw(10),
        borderTopRightRadius: vw(10)
    },
    

})