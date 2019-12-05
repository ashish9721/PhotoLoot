import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
//Custom Imports
import {Images} from '../Constants';
import {styles} from './styles';

export const ResetPasswordModal = props => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Image
          style={styles.successImage}
          source={Images.SUCCESSGRAPHIC}
          resizeMode="contain"
        />
        <Text style={styles.verifyText}>Password reset successful</Text>
        <Text style={styles.detailTxt}>
          Your password was reset successfully. Please sign in with your new
          password now.
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.goButton}>
          <Text style={styles.letsGo}>Okay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
