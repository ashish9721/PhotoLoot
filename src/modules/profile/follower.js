import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
//Custom Imports
import { styles } from './styles'
import { Images } from '../../Constants'

export default class Followers extends Component {
    renderItem = (rowData) => {
        return (
            <View style={styles.rowContainer}>
                <View style={styles.followerImgStyle} />
                <Text style={styles.nameTxt}>{rowData.item.name}</Text>
                <TouchableOpacity style={styles.followingButton}>
                    <Image
                        style={styles.checkImage}
                        source={Images.FOLLOWINGCHECK} resizeMode='contain' />
                    <Text style={styles.followingTxt}>
                        Following
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View>
                <FlatList
                    data={followersData}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderItem} />
            </View>
        )
    }
}

const followersData = [
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },
    {
        name: "Andrea Pirlo"
    },

]