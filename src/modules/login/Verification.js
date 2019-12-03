import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw } from '../../Constants/Dimension';
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

const styles = StyleSheet.create({
    parent: {
        alignItems: 'center',
        marginTop: vh(100),
        paddingHorizontal: vw(29)
    },
    main: {
        height: vh(125),
        width: vw(125.5),
        backgroundColor: '#ff9803',
    },
    Verification: {
        fontSize: vw(25),
        color: 'black',
        fontWeight: 'bold',
        marginTop: vh(30),
        alignSelf:'flex-start'
    },
    starttext: {
        fontSize: vw(15),
        color: '#606060',
        marginTop: vh(15),

    },
    middle: {
        marginTop: vh(20)
    },
    otp: {
        height: vh(45),
        width: vw(315),
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        padding: vw(15),
    },
    Buttonsubmit: {
        height: vh(45),
        width: vw(315),
        backgroundColor: '#ff9803',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(10),
        marginTop: vh(25),
    },
    submitstyle: {
        color: '#ffffff',
        fontSize: vw(15)
    },
    last: {
        marginTop: vh(60)
    },
    lasttext: {
        fontSize: vw(15),
        color: '#6E6E6E',
    },
    resend: {
        fontSize: vw(15),
        color: '#ff9803'
    }

})