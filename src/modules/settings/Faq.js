import React from 'react';
import { View, Text, TouchableOpacity, Image,} from 'react-native';
import {styles} from './styles';
export default class Faq extends React.Component {
    render() {
        return (
            <View style={styles.parent1}>
                <View style={styles.first}>
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
                <View style={styles.common}>
                    <Text style={styles.textchallenge}>How will I know I have won the challenge and{'\n'}how will I get the prize money?</Text>
                    <TouchableOpacity onPress={() => { console.warn("Hello"); }}>
                        <Image style={styles.addimg} source={require('../../../src/Images/add.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.common}>
                    <Text style={styles.textupload}>How do I upload a picture in any challenge and what are the basic rules of submissions?</Text>
                    <TouchableOpacity onPress={() => { console.warn("Hello"); }}>
                        <Image style={styles.addimg} source={require('../../../src/Images/add.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.common}>
                    <Text style={styles.textipsum}>Lorem ipsum dolor sit amet, consectetur piscing elit, sed do eiusmod tempor?</Text>
                    <TouchableOpacity onPress={() => { console.warn("Hello"); }}>
                        <Image style={styles.addimg} source={require('../../../src/Images/add.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.common}>
                    <Text style={styles.textExc}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli?</Text>
                    <TouchableOpacity onPress={() => { console.warn("Hello"); }}>
                        <Image style={styles.addimg} source={require('../../../src/Images/add.png')} />
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}