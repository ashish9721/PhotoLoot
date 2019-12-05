

import React, { Component } from 'react'

import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native'
import { PrizeViews, Description, Rules } from './functional'
import { vw } from '../../Constants'
import {StickerAndImage} from '../../component/functionalComponent/functional'

// currently working
export default class CurrentChallenges extends Component {

    renderData() {
        return Tempdata.map((result, index) => {
            return (
                <StickerAndImage  heading={result.txt1} 
                img={result.img}
                 time={result.txt2}
                  price={result.price}
                   innercontainer2={true}
                    navProps={this.props}
                     goto={'ChallengesInfo'} 
                     />
            )
        })
    }

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




const Tempdata = [

    { txt1: "Beach Happy", txt2: "2 Days Left", price: "500" },
    { txt1: "Beach Happy", txt2: "2 Days Left", price: "500" },
    { txt1: "Beach Happy", txt2: "2 Days Left", price: "500" },

]
const styles = StyleSheet.create({
    container: {
      
        justifyContent: 'center',
        paddingHorizontal:vw(16),
        // backgroundColor:'red'
    }

})
