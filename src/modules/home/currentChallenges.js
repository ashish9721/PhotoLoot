

import React, { Component } from 'react'
import { Text, View ,SafeAreaView,StyleSheet,Button} from 'react-native'
import{PrizeViews} from './functional'

// currently working
export default class CurrentChallenges extends Component {
    render() {
        return (
            <View style={styles.container}>
           <PrizeViews/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{flex:1,justifyContent:'center'}
   
})