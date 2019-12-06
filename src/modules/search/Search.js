import React from 'react';
import { View, Text, FlatList, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import Strings from '../../Constants/Strings';
import { styles } from './styles';
Searchdata = [
    { title: Strings.search3, showone: false },
    { title: Strings.search1, showone: true },
    { title: Strings.search2, showone: true },

]

const Search = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Image style={styles.imgsearch} source={require('../../../src/Images/icWhiteSearch.png')} resizeMode='contain' />
                <TextInput style={styles.searchinput} placeholder="Search"
                    placeholderTextColor="#BDBDBD" />
            </View>
            <Text style={styles.recentsearch}>Recent Searches</Text>

            <FlatList
                data={Searchdata}
                keyExtractor={(item, index) => index.toString()}
                renderItem={rowData => {
                    return (
                        rowData.item.showone ?
                            <TouchableOpacity style={styles.commonview}>
                                <View style={styles.image}></View>
                                <Text style={styles.commontext}>{rowData.item.title}</Text>
                            </TouchableOpacity>
                            :

                            <TouchableOpacity style={styles.firstview}>
                                <View style={styles.firstimage}></View>
                                <Text style={styles.text}>{rowData.item.title}</Text>
                            </TouchableOpacity>

                    )
                }
                }

            />
        </SafeAreaView>
    )
}
export default Search;