import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw } from '../../Constants/Dimension';
export default class ChangePassword extends React.Component {
    render() {
        return (
            <View style={styles.parent}>
                <View>
                    <TextInput style={styles.password} placeholder="Old Password"
                        placeholderTextColor="#b3b3b3" />
                </View>
                <View style={styles.input2}>
                    <TextInput placeholder="New Password"
                        placeholderTextColor="#b3b3b3" />
                    <View style={styles.show}></View>
                </View>
                <TouchableOpacity style={styles.Buttonupdate}>
                    <Text style={styles.updatestyle}>Update</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 140
    },
    password: {
        height: vh(45),
        width: vw(315),
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        padding: 10
    },
    input2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        height: vh(45),
        width: vw(315),
        marginTop: 20,
        borderRadius: 10,
        padding: 10
    },
    show: {
        height: vh(11),
        width: vw(20),
        backgroundColor: 'red',
    },
    Buttonupdate:{
        height: vh(45),
        width: vw(315),
        backgroundColor: '#ff9803',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 23
    },
    updatestyle: {
        color: '#ffffff',
        fontSize: 15
    },
})