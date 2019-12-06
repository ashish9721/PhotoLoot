import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw } from '../../Constants/Dimension';
import {styles} from './styles';
export default class Verification extends React.Component {
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.main}></View>
                <Text style={styles.Verification}>Verification</Text>

                <Text style={styles.starttext}>To verify it's you please enter your OTP sent to your registered email ID.</Text>
                <View style={styles.middle}>
                    <View>
                        <TextInput style={styles.otp} placeholder="Enter OTP"
                            placeholderTextColor="#b3b3b3" />
                    </View>
                    <TouchableOpacity style={styles.Buttonsubmit}>
                        <Text style={styles.submitstyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.last}>
                    <Text style={styles.lasttext}>Didn't receive OTP?<Text style={styles.resend} onPress={() => { console.warn("Resend"); }}> Resend</Text></Text>
                </View>
            </View>
        )
    }





}