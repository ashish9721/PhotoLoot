

import React, { Component } from 'react'

import { Text, View ,SafeAreaView,StyleSheet,Button} from 'react-native'
import {ThreeStickerContainer,StickerAndImage} from '../../component/functionalComponent/functional'

// currently working
export default class CurrentChallenges extends Component {

    renderData() {
        return Tempdata.map((result, index) => {
            return (
                <StickerAndImage heading={result.txt1} 
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

           {
               this.renderData()
           }
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{flex:1,justifyContent:'center'}
   
})


const Tempdata = [

    { txt1: "Beach Happy", txt2: "2 Days Left", price: "500" },
    { txt1: "Beach Happy", txt2: "2 Days Left", price: "500" },
    { txt1: "Beach Happy", txt2: "2 Days Left", price: "500" },

]

