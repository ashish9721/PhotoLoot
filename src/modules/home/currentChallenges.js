

import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native'
import { PrizeViews, Description, Rules } from './functional'
import { vw } from '../../Constants'

// currently working
export default class CurrentChallenges extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PrizeViews />
                <Description />
                <Rules />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      
        justifyContent: 'center',
        paddingHorizontal:vw(16),
        // backgroundColor:'red'
    }

})