import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw } from '../../Constants/Dimension';
export default class TermsAndCondition extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.termstext}>Terms of Use</Text>
                <View style={styles.middle}>
                    <Text style={styles.usertext}>User</Text>
                    <View style={styles.firsttext}>
                        <Text style={styles.middletext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quisque egestas diam in arcu.{'\n\n'}                                    Cursus euismod quis viverra. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Consequat interdum varius sit amet mattis vulputate. Vel facilisis volutpat est velit egestas dui id. Purus non enim praesent elementum facilisis leo vel. Sed felis eget velit aliquet.</Text>
                    </View>
                    <Text style={styles.Contenttext}>Content</Text>
                    <View style={styles.secondtext}>
                        <Text style={styles.middletextnext}>Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vitae semper quis lectus nulla. Consequat id porta nibh venenatis cras sed felis. Sed pulvinar proin gravida hendrerit lectus a. Turpis egestas maecenas pharetra convallis.</Text>
                    </View>
                </View>
                <Text style={styles.condtext}>Conditions</Text>
                <View style={styles.last}>
                    <View style={styles.thirdtext}>
                        <Text style={styles.lasttext}>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quisque egestas diam in arcu.Cursus euismod quis viverra. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Consequat interdum varius sit amet mattis vulputate. Vel facilisis volutpat.{'\n\n'}      Est velit egestas dui id. Purus non enim praesent elementum facilisis leo vel. Sed felis eget velit aliquet.Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vitae semper</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    termstext: {
        fontSize: 15,
        color: '#ff9803',
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 85
    },
    middle: {
        marginTop: 15,
        marginLeft: 15,
    },
    usertext: {
        fontSize: 12.5,
        color: 'black',
        fontWeight: 'bold'
    },
    firsttext: {
        width: vw(344.5),
        height: vh(162.5),
        marginTop:15
    },
    middletext: {
        fontSize: 12.5,
        color: '#A4A4A4',
    },
    Contenttext: {
        fontSize: 12.5,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 15
    },
    secondtext: {
        width: vw(332.5),
        height: vh(57.5),
        marginTop: 10
    },
    middletextnext: {
        fontSize: 12.5,
        color: '#A4A4A4',
    },
    condtext: {
        fontSize: 15,
        color: '#ff9803',
        fontWeight: 'bold',
        marginTop: 23,
        marginLeft: 13
    },
    last: {
        marginTop: 15,
        marginLeft: 15,
    },
    thirdtext: {
        width: vw(344.5),
        height: vh(184)
    },
    lasttext: {
        fontSize: 12.5,
        color: '#A4A4A4',
    },
    lasttext1: {
        fontSize: 12.5,
        color: '#A4A4A4',
        marginTop: 15
    },
})