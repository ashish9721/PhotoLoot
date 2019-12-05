import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { vh, vw, } from '../../Constants/Dimension';
export default class TnC extends React.Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.termstext}>Terms of Use</Text>
                <View style={styles.middle}>
                    <Text style={styles.usertext}>User</Text>
                    <Text style={styles.middletext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quisque egestas diam in arcu.{'\n\n'}                                    Cursus euismod quis viverra. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Consequat interdum varius sit amet mattis vulputate. Vel facilisis volutpat est velit egestas dui id. Purus non enim praesent elementum facilisis leo vel. Sed felis eget velit aliquet.</Text>
                    <Text style={styles.Contenttext}>Content</Text>
                    <View style={styles.secondtext}>
                        <Text style={styles.middletextnext}>Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vitae semper quis lectus nulla. Consequat id porta nibh venenatis cras sed felis. Sed pulvinar proin gravida hendrerit lectus a. Turpis egestas maecenas pharetra convallis.</Text>
                    </View>
                </View>
                <Text style={styles.condtext}>Conditions</Text>
                <Text style={styles.lasttext}>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quisque egestas diam in arcu.Cursus euismod quis viverra. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Consequat interdum varius sit amet mattis vulputate. Vel facilisis volutpat.{'\n\n'}      Est velit egestas dui id. Purus non enim praesent elementum facilisis leo vel. Sed felis eget velit aliquet.Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vitae semper</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    termstext: {
        fontSize: vw(15),
        color: '#ff9803',
        fontWeight: 'bold',
        marginLeft: vw(15),
        marginTop: vh(85)
    },
    middle: {
        marginTop: vh(15),
        marginLeft: vw(15),

    },
    usertext: {
        fontSize: vw(12),
        color: 'black',
        fontWeight: 'bold'
    },
    middletext: {
        fontSize: vw(12),
        color: '#A4A4A4',
        width: vw(344),
        marginTop: vh(13),
    },
    Contenttext: {
        fontSize: vw(12),
        color: 'black',
        fontWeight: 'bold',
        marginTop: vh(18),
    },
    secondtext: {
        width: vw(332.5),
        height: vh(57.5),
        marginTop: vh(10),
    },
    middletextnext: {
        fontSize: vw(12),
        color: '#A4A4A4',
    },
    condtext: {
        fontSize: vw(15),
        color: '#ff9803',
        fontWeight: 'bold',
        marginTop: vh(40),
        marginLeft: vw(13)
    },
    lasttext: {
        marginTop: vh(15),
        paddingHorizontal: vw(15),
        fontSize: vw(12),
        color: '#A4A4A4',
    },
})