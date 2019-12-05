

import React, { Component } from 'react'

import { Text, View, SafeAreaView, StyleSheet, Button,ScrollView } from 'react-native'
import { ThreeStickerContainer, StickerAndImage } from '../../component/functionalComponent/functional'
import {styles} from './styles'
// currently working
export default class CurrentChallenges extends Component {

    renderData() {
        return Tempdata.map((result, index) => {
            return (
                <StickerAndImage
                    key={index}
                    heading={result.txt1}
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
            <ScrollView
            style={styles.scrollViewStyle} 
            bounces={false}
            contentContainerStyle={styles.container}>
                {
                    this.renderData()
                }
            </ScrollView>
        )
    }
}





const Tempdata = [

    { txt1: "Beach Happy", txt2: "3 Days Left", price: "500" },
    { txt1: "Happy", txt2: "4 Days Left", price: "600" },
    { txt1: "Summer", txt2: "10 Days Left", price: "300" },

]
