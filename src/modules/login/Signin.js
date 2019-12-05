import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw } from '../../Constants';
export default class Signin extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.parent}>
                    <View style={styles.main}></View>
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
                        <View style={styles.show}></View>
                    </View>
                    <Text style={styles.fpass}>Forgot Password?</Text>
                    <TouchableOpacity style={styles.Buttonsubmit}>
                        <Text style={styles.submitstyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textconnect}>or Connect with</Text>
                <View style={styles.twobutton}>
                    <TouchableOpacity style={styles.fbbuttuon}>
                        <View style={styles.fbicon}></View>
                        <Text style={styles.fbtext}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instbuttuon}>
                        <View style={styles.insticon}></View>
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

const styles = StyleSheet.create({
    parent: {
        marginTop: vh(100),
        paddingHorizontal:vw(29)
    },
    main: {
        height: vh(125),
        width: vw(125.5),
        backgroundColor: '#ff9803',
        alignSelf:'center'
    },
    signin: {
        fontSize: vw(25),
        color: 'black',
        fontWeight: 'bold',
        marginTop: vh(30),
        
    },
    Buttonsubmit: {
        height: vh(45),
        width: vw(315),
        backgroundColor: '#ff9803',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    submitstyle: {
        color: '#ffffff',
        fontSize: 15
    },
    middle: {
        marginLeft: 30,
        marginTop: 20
    },
    email: {
        height: vh(45),
        width: vw(315),
        borderRadius: vw(10),
        backgroundColor: '#f5f5f5',
        padding: vw(10)
    },
    input2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        height: vh(45),
        width: vw(315),
        marginTop: vh(20),
        borderRadius: vw(10),
        padding: vw(10)
    },
    show: {
        height: vh(11),
        width: vw(20),
        backgroundColor: 'red',
        marginRight: vw(11)
    },
    fpass: {
        marginTop: vh(20),
        fontSize: vw(15),
        color: '#6E6E6E',
        alignSelf:'flex-end',
        marginRight:vw(30)
    },
    textconnect: {
        fontSize: vw(15),
        color: '#6E6E6E',
        marginTop: vh(30),
        alignSelf:'center'
    },
    twobutton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: vh(25)
    },
    fbbuttuon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: vh(45),
        width: vw(145),
        borderRadius: vw(10),
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        shadowOpacity: 0.3,
        shadowOffset: { height: vh(5), width: vw(2) },
        shadowColor: 'gray'

    },
    fbicon: {
        height: vh(20),
        width: vw(20),
        backgroundColor: '#4172cb',
        marginRight: vw(10)
    },
    fbtext: {
        fontSize: vw(15),
        color: 'black',
        fontWeight: 'bold'
    },
    instbuttuon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: vh(45),
        width: vw(145),
        borderRadius: vw(10),
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.3,
        shadowOffset: { height: vh(5), width: vw(2) },
        shadowColor: 'gray',
        backgroundColor: 'white'
    },
    insticon: {
        height: vh(20),
        width: vw(20),
        backgroundColor: '#ef0011',
        marginRight: vw(10),
    },
    insttext: {
        fontSize: vw(15),
        color: 'black',
        fontWeight: 'bold'
    },
    lasttext: {
        fontSize: 15,
        color: '#6E6E6E',
    },
    signup: {
        fontSize: vw(15),
        color: '#ff9803'
    },
    last: {
        marginTop: vh(60),
        alignSelf:'center'
    }


})
