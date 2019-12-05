

import React, { Component } from 'react'
<<<<<<< HEAD
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native'
import { PrizeViews, Description, Rules } from './functional'
import { vw } from '../../Constants'
import { StickerAndImage } from '../../component/functionalComponent/functional'
=======
<<<<<<< HEAD
import { Text, View ,SafeAreaView,StyleSheet,Button} from 'react-native'
import{PrizeViews} from './functional'
import {ThreeStickerContainer,StickerAndImage} from '../../component/functionalComponent/functional'
=======
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native'
import { PrizeViews, Description, Rules } from './functional'
import { vw } from '../../Constants'
>>>>>>> c4fa14ff0524f02cb0944fd7a104342bd597c9ff

>>>>>>> working
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
<<<<<<< HEAD
                {
                    this.renderData()
                }
=======
<<<<<<< HEAD
           {
               this.renderData()
           }
=======
                <PrizeViews />
                <Description />
                <Rules />
>>>>>>> c4fa14ff0524f02cb0944fd7a104342bd597c9ff
>>>>>>> working
            </View>
        )
    }
}

<<<<<<< HEAD
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' }

=======
<<<<<<< HEAD
const styles=StyleSheet.create({
    container:{flex:1,justifyContent:'center'}
   
>>>>>>> working
})


const Tempdata = [

    { txt1: "Beach Happy", txt2: "2 Days Left", price: "500" },
    { txt1: "Beach Happy", txt2: "2 Days Left", price: "500" },
    { txt1: "Beach Happy", txt2: "2 Days Left", price: "500" },

]
=======
const styles = StyleSheet.create({
    container: {
      
        justifyContent: 'center',
        paddingHorizontal:vw(16),
        // backgroundColor:'red'
    }

})
>>>>>>> c4fa14ff0524f02cb0944fd7a104342bd597c9ff
