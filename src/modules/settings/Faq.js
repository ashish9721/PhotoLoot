import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { vh, vw } from '../../Constants/Dimension';
import Strings from '../../Constants/Strings';
// faqdata = [
//     { title: Strings.question1, text: Strings.innertext },
//     { title: Strings.question2, },
//     { title: Strings.question3, },
//     { title: Strings.question4, },
//     { title: Strings.question5, },
// ]


export default class Faq extends React.Component {
    render() {
        return (
            // <FlatList
            //     data={faqdata}
            //     keyExtractor={(item, index) => index.toString()}
            //     renderItem={rowData => {
            //         return (
            //             <View>

            //             </View>
            //         )
            //     }
            //     }
            ///>
            <View style={styles.parent}>
                <View style={styles.firstview}>
                    <View style={styles.whenview}>
                        <Text style={styles.whentext}>When does a new challenge start and how can I know?</Text>
                        <TouchableOpacity onPress={() => { console.warn("Hello"); }}>
                            <Image style={styles.crossimg} source={require('../../../src/Images/cross.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Loremview}>
                        <Text style={styles.Loremtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec.{'\n'}                      Vulputate odio ut enim blandit volutpat enas volutpat. Quisque egestas diam in arcu.Cursus euismod quis viverra. Fames ac turpis egestas maecenas pharetra</Text>
                    </View>

                </View>
                <View style={styles.commonview}>
                    <Text style={styles.text}>How will I know I have won the challenge and{'\n'}how will I get the prize money?</Text>
                    <TouchableOpacity onPress={() => { console.warn("Hello"); }}>
                        <Image style={styles.addimg} source={require('../../../src/Images/add.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.commonview}>
                    <Text style={styles.text}>How do I upload a picture in any challenge and what are the basic rules of submissions?</Text>
                    <TouchableOpacity onPress={() => { console.warn("Hello"); }}>
                        <Image style={styles.addimg} source={require('../../../src/Images/add.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.commonview}>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur piscing elit, sed do eiusmod tempor?</Text>
                    <TouchableOpacity onPress={() => { console.warn("Hello"); }}>
                        <Image style={styles.addimg} source={require('../../../src/Images/add.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.commonview}>
                    <Text style={styles.text}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli?</Text>
                    <TouchableOpacity onPress={() => { console.warn("Hello"); }}>
                        <Image style={styles.addimg} source={require('../../../src/Images/add.png')} />
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vh(80)
    },
    firstview: {
        width: vw(345),
        borderRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: { height: vh(5), width: vw(2) },
        shadowColor: 'gray',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    whenview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff0d9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: vw(345),
        // height: vh(56),
        alignItems: 'center',
        paddingRight: 10
    },
    whentext: {
        fontSize: vw(12.5),
        color: '#5f5f5f',
        width: vw(267),
        marginLeft: 10,
        marginTop: 10,
        marginBottom: vh(10)
    },
    crossimg: {
        width: vw(15),
        height: vh(15),
        marginTop: 10,
        marginRight: 12
    },
    Loremview: {
        width: vw(305),
        marginTop: vh(10)
    },
    Loremtext: {
        fontSize: vw(12.5),
        color: '#A4A4A4',
        marginVertical: vh(15),

    },
    commonview: {
        width: vw(345),
        borderRadius: vw(10),
        backgroundColor: '#fff0d9',
        marginTop: vh(25),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: vh(15)
    },
    text: {
        fontSize: 12.5,
        color: '#5f5f5f',
        marginLeft: vw(10),
        marginTop: vh(10),
        width: vw(252)
    },
    addimg: {
        width: vw(19),
        height: vh(19),
        marginTop: vh(10),
        marginRight: vw(12),
        alignSelf: 'center'
    },
})