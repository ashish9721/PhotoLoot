import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import {StickerAndImage,ThreeStickerContainer} from '../../component/functionalComponent/functional'
import {styles} from './styles'
import CurrentChallenges from './currentChallenges';
import { Images } from '../../Constants';
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* //Header */}
                {/* <View style={styles.headerView}></View> */}
               {/*  pass a 2 images as a prop, one as imagebackground and 2nd as a image  */}
                <StickerAndImage txt1="Current Challenges" img={Images.DOLLAR} txt2="2 Ongoing" innercontainer2={true} />
               <StickerAndImage txt1="Upcoming Challenges" img={Images.DOLLAR} txt2="2 Upcoming" />
               <StickerAndImage txt1="Hall Of Fame" img={Images.DOLLAR} txt2="View Winners" /> 
               {/* <ThreeStickerContainer txt1="Jungle Safari"/>
               <ThreeStickerContainer txt1="Jungle Safari"/>
               <ThreeStickerContainer txt1="Jungle Safari"/> */}

               {/* <CurrentChallenges/> */}
               
            </View>
        )
    }
}

