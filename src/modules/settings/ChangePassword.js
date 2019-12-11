import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {Images} from '../../Constants'

export default class ChangePassword extends React.Component {
  render() {
    return (
      <View style={styles.parent}>
        <TextInput
          style={styles.oldpassword}
          placeholder="Old Password"
          placeholderTextColor="#b3b3b3"
        />

        <View style={styles.input2}>
          <TextInput
            style={styles.newpassword}
            placeholder="New Password"
            placeholderTextColor="#b3b3b3"
          />
          <TouchableOpacity>
            <Image
              style={styles.eye}
              source={Images.EYEINACTIVE}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.Buttonupdate}>
          <Text style={styles.updatestyle}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}