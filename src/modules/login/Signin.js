import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { vh, vw } from '../../Constants/Dimension';
import {styles} from './styles';
export default class Signin extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.parent}>
                    <Image style={styles.main} source={require('../../../src/Images/Logo.png')} />
                    <Text style={styles.signin}>Sign In</Text>
                </View>
                <View style={styles.middle}>
                    <View>
                        <TextInput style={styles.email} placeholder="Email Address"
                            placeholderTextColor="#b3b3b3" />
                    </View>
                    <View style={styles.input2}>
                        <TextInput placeholder="Password"
                            placeholderTextColor="#b3b3b3" />
                        <Image style={styles.show} source={require('../../../src/Images/Eye.png')} />
                    </View>
                    <Text style={styles.fpass}>Forgot Password?</Text>
                    <TouchableOpacity style={styles.Buttonsubmit}>
                        <Text style={styles.submitstyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textconnect}>or Connect with</Text>
                <View style={styles.twobutton}>
                    <TouchableOpacity style={styles.fbbuttuon}>
                        <Image style={styles.fbicon} source={require('../../../src/Images/Fb.png')} />
                        <Text style={styles.fbtext}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instbuttuon}>
                        <Image style={styles.insticon} source={require('../../../src/Images/Instagram.png')} />
                        <Text style={styles.insttext}>Instagram</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.last}>
                    <Text style={styles.lasttext}>Don't have an account?<Text style={styles.signup} onPress={() => { console.warn("show terms And Condition"); }}>Sign Up</Text></Text>
                </View>
            </View>
        )


    }
}
