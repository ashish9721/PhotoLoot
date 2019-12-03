import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { StickerAndImage } from '../../component/functionalComponent/functional'
import { styles } from './styles'
import CurrentChallenges from './currentChallenges';
export default class Home extends Component {
    render() {
        return (
            <>
                <CurrentChallenges />
            </>
        )
    }
}

