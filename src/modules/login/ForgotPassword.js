import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw } from '../../Constants/Dimension';
import {styles} from './styles';
export default class ForgotPassword extends React.Component {
    render() {
        return (
            <View style={styles.parentstyle}>
                <View style={styles.parent}>
                    <View style={styles.main}></View>
                    <Text style={styles.ForgotPassword}>Forgot Password?</Text>
                </View>
                <View style={styles.donttext}>
                    <Text style={styles.starttext}>Don't worry! enter your registered email ID in order to recieve reset password instructions.</Text>
                </View>
                <View>
                    <TextInput style={styles.email} placeholder="Email Address"
                        placeholderTextColor="#b3b3b3" />
                </View>
                <TouchableOpacity style={styles.Buttonsubmit}>
                    <Text style={styles.submitstyle}>Submit</Text>
                </TouchableOpacity>

            </View>
        )
    }
}