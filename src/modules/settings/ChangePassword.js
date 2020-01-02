import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {Images} from '../../Constants'
import { Header } from '../../component/headers/header';

 const ChangePassword =(props)=> {
    return (
      <>
      <Header
      title="Change Password"
      showBackButton={true}
      navProps={props.navigation}
      />
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
      </>
    );
  }
export default ChangePassword;