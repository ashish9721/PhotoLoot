import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, TextInput } from 'react-native';
import { vh, vw, } from '../../Constants/Dimension';
import Strings from '../../Constants/Strings';
Searchdata = [
    { title: Strings.search1 },
    { title: Strings.search2 },
]

const Search = (props) => {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.search}>
                    <Image style={styles.imgstyle} source={require('../../../src/Images/Search.png')} resizeMode='contain' />
                    <TextInput style={styles.input} placeholder="Search"
                        placeholderTextColor="#BDBDBD" />
                </View>
            </View>
            <Text style={styles.recent}>Recent Searches</Text>
            <View>
                <View style={styles.firstview}>
                    <View style={styles.firstimage}></View>
                    <Text style={styles.text}>#Jungle Safari</Text>
                </View>
            </View>
            <FlatList
                data={Searchdata}
                keyExtractor={(item, index) => index.toString()}
                renderItem={rowData => {
                    return (
                        <View>
                            <View style={styles.commonview}>
                                <View style={styles.image}></View>
                                <Text style={styles.commontext}>{rowData.item.title}</Text>
                            </View>
                        </View>
                    )




                }
                }

            />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: vh(64),
        width: vw(375),
        marginTop: vh(44),
        backgroundColor: '#ff9803',
    },
    search: {
        flexDirection: 'row',
    },
    imgstyle: {
        width: vw(20),
        height: vh(20),
        marginLeft: vw(14),
        marginTop: vh(32)
    },
    input: {
        fontSize: vw(15),
        marginTop: vh(34),
        marginLeft: vw(10)
    },
    recent: {
        fontSize: vw(12),
        color: 'black',
        fontWeight: 'bold',
        marginLeft: vw(14),
        marginTop: vh(19)

    },
    firstview: {
        marginLeft: vw(15),
        marginTop: vh(20),
        flexDirection: 'row'
    },
    firstimage: {
        height: vw(30),
        width: vw(30),
        borderRadius: vw(7),
        backgroundColor: 'black'
    },
    text: {
        fontSize: vw(15),
        marginLeft: vw(9),
        alignSelf: 'center'
    },
    commonview: {
        marginLeft: vw(15),
        marginTop: vh(15),
        flexDirection: 'row'
    },
    image: {
        width: vw(30),
        height: vw(30),
        borderRadius: vw(15),
        backgroundColor: 'red'
    },
    commontext: {
        fontSize: vw(15),
        marginLeft: vw(10),
        alignSelf: 'center'
    }
})



export default Search;