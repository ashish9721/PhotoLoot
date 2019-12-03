import React, { Component } from 'react'
import { Image, ImageBackground,Text } from 'react-native'

//Custom Import
import {styles} from './styles'
import { Images, Strings } from '../../Constants'

export default class Splash extends Component {
    render() {
        return (
            <ImageBackground style={styles.imageView}
            source={Images.SPLASHBACKGROUND}resizeMode="contain">
                <Image
                source={Images.APPICON}resizeMode="contain"/>
                <Text style={styles.PhotoLootTxt}>
                    {Strings.PhotoLoot}
                </Text>
                <Text style={styles.appreciationText}>
                    {Strings.appreciation}
                </Text>
            </ImageBackground>
        )
    }
}
