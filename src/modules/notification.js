import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { vh, vw } from '../Constants';
export default class Helpnsupport extends React.Component {
    render() {
        return (
            <View style={styles.parent}>
                <View>
                    <TextInput style={styles.name} placeholder="Name"
                        placeholderTextColor="#A4A4A4" />
                </View>
                <View>
                    <TextInput style={styles.email} placeholder="Email Address"
                        placeholderTextColor="#A4A4A4" />
                </View>
                <View>
                    <TextInput style={styles.title} placeholder="Title"
                        placeholderTextColor="#A4A4A4" />
                </View>
                <View>
                    <TextInput style={styles.description} placeholder="Description"
                        placeholderTextColor="#A4A4A4"
                        multiline={true} />
                </View>
                <TouchableOpacity style={styles.Buttonsubmit}>
                    <Text style={styles.submitstyle}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vh(110)
    },
    name: {
        height: vh(45),
        width: vw(315),
        borderRadius: vw(10),
        backgroundColor: '#f5f5f5',
        padding: vw(10)
    },
    email: {
        height: vh(45),
        width: vw(315),
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginTop: 20
    },
    title: {
        height: vh(45),
        width: vw(315),
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginTop: 20
    },
    description: {
        height: vh(90),
        width: vw(315),
        borderRadius: vw(10),
        backgroundColor: '#f5f5f5',
        marginTop: vh(20),
        paddingLeft: vw(15),
        paddingTop: vh(17)
    },
    Buttonsubmit: {
        height: vh(45),
        width: vw(315),
        backgroundColor: '#ff9803',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(10),
        marginTop: vh(25)
    },
    submitstyle: {
        color: '#ffffff',
        fontSize: vw(15),
        fontWeight: '600'
    },
})