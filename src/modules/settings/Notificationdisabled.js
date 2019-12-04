import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, TextInput } from 'react-native';
import { vh, vw, } from '../../Constants/Dimension';
import Strings from '../../Constants/Strings';
notifydata = [
    { title: Strings.text1, image: require('../../../src/Images/lock.jpeg'), image1: require('../../../src/Images/arrow.png') },
    { title: Strings.text2, image: require('../../../src/Images/terms.png'), image1: require('../../../src/Images/arrow.png') },
    { title: Strings.text3, image: require('../../../src/Images/question.png'), image1: require('../../../src/Images/arrow.png') },
    { title: Strings.text4, image: require('../../../src/Images/about.png'), image1: require('../../../src/Images/arrow.png') },
//     { title: Strings.text5, image: require('../../../src/Images/terms.png'), image1: require('../../../src/Images/arrow.png') },
//     { title: Strings.text6, image: require('../../../src/Images/terms.png'), image1: require('../../../src/Images/arrow.png') }
]
const Notificationdisabled = (props) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.textsettings}>Settings</Text>
            </View>
            <View style={styles.firstview}>
               <View style= {styles.changeview}>
                   <Image style={styles.image}
                     source={require('../../../src/Images/lock.jpeg')}
                   />
                   <Text style={styles.text}>Change Password</Text>
               </View>
               <Image style={styles,imgarrow}
                   source={require('../../../src/Images/arrow.png')}/>
            </View>
            <FlatList
                data={notifydata}
                keyExtractor={(item, index) => index.toString()}
                renderItem={rowData => {
                    return (
                        <View>
                            {/* <View style={styles.commonview}>
                                <View style = {{flexDirection: 'row'}}>
                                    <Image style={styles.image}
                                        source={rowData.item.image}
                                    />
                                    <Text style={styles.text}>{rowData.item.title}</Text>
                                </View>
                                <Image style={styles.imgarrow}
                                    source={rowData.item.image1}
                                />
                            </View> */}
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
    textsettings: {
        fontSize: vw(17),
        color: 'white',
        alignSelf: 'center',
        marginTop: vh(20)
    },
    firstview:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: vw(15),
        marginTop: vh(17),
    },
    changeview:{
       flexDirection:'row'
    },
    // commonview: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginLeft: vw(15),
    //     marginTop: vh(17),
    // },
    image: {
        width: vw(35),
        height: vw(35),
        //backgroundColor: 'blue'

    },
    text: {
        fontSize: vw(15),
        alignSelf: 'center',
        marginLeft:vw(10)
    },
    imgarrow: {
        width: vw(8),
        height: vw(14),
        alignSelf:'center',
        marginRight:vw(15),
    }

})

export default Notificationdisabled;