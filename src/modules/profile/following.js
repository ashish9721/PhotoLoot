import React, { Component } from 'react'
import { Text, View,FlatList,TouchableOpacity,Image } from 'react-native'

//Custom Imports
import { styles } from './styles'
import { Images } from '../../Constants'

export default class Following extends Component {
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
            <>
                <FlatList
                    data={followersData}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderItem} />
                    
            </>
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