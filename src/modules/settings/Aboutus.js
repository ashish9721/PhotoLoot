import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw } from '../../Constants/Dimension';
export default class Aboutus extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.privacytext}>Privacy Policy</Text>
                <View style={styles.middle}>
                    <Text style={styles.accounttext}>Your Account Information</Text>
                    <View style={styles.firsttext}>
                        <Text style={styles.middletext}>{'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quisque egestas diam in arcu.Cursus euismod quis viverra. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Consequat interdum varius sit amet mattis vulputate. Vel facilisis volutpat est velit egestas dui id. Purus non enim praesent elementum facilisis leo vel.{'\n\n'}    Sed felis eget velit aliquet.Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vitae semper quis lectus nulla. Consequat id porta nibh venenatis cras sed felis.Sed pulvinar proin gravida hendrerit lectus a. Turpis egestas maecenas pharetra convallis.</Text>
                    </View>
                    <Text style={styles.Contenttext}>Your Content</Text>
                    <View style={styles.secondtext}>
                        <Text style={styles.middletext}>{'\n'}Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quisque egestas diam in arcu.Cursus euismod quis viverra. Fames ac turpis egestas maecenas pharetra convallis posuere morbi.Consequat interdum varius sit amet.{'\n\n'}                                                             Rulit egestas dui id. Purus non enim praesent elementum facilisis leo vel. Sed felis eget velit aliquet.Posuere lorem ipsum dolor sit amet consectetur iscing elit duis. Vitae semper quis lectus nulla. Consequat id porta nibh venenatis cras sed feli. Sed pulvinar proin gravida hendrerit lectus a. Turpis egestas maecenas pharetra convallis. </Text>
                    </View>
                </View>
            </View>
        )

    }




}

const styles = StyleSheet.create({
    privacytext: {
        fontSize: vw(15),
        color: '#ff9803',
        fontWeight: 'bold',
        marginLeft: vw(12),
        marginTop: vh(106)
    },
    middle: {
        marginLeft: vw(15),
        marginTop: vh(15)
    },
    accounttext: {
        fontSize: vw(12),
        color: 'black',
        fontWeight: 'bold'
    },
    firsttext: {
        width: vw(339),
    },
    middletext: {
        fontSize: vw(12),
        color: '#A4A4A4',
    },
    Contenttext: {
        fontSize: vw(12),
        color: 'black',
        fontWeight: 'bold',
        marginTop: vh(15)
    },
    secondtext: {
        width: vw(343),
    },
})