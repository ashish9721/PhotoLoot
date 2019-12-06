import React from 'react';
import { Text, View ,TextInput,TouchableOpacity,Image} from 'react-native'
import {styles} from './styles';
export default class ChangePassword extends React.Component {
    render() {
        return (
            <View style={styles.parent}>
                <View>
                    <TextInput style={styles.oldpassword} placeholder="Old Password"
                        placeholderTextColor="#b3b3b3" />
                </View>
                <View style={styles.input2}>
                    <TextInput style={styles.newpassword} placeholder="New Password"
                        placeholderTextColor="#b3b3b3" />
                    <TouchableOpacity>
                        <Image style={styles.eye} source={require('../../../src/Images/Eye.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.Buttonupdate}>
                    <Text style={styles.updatestyle}>Update</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
