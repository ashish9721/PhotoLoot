import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
//Custom Imports
import {Images} from '../Constants';
import {styles} from './styles';

export const VerificationModal = props => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Image
          style={styles.successImage}
          source={Images.SUCCESSGRAPHIC}
          resizeMode="contain"
        />
        <Text style={styles.verifyText}>Verification Succesful</Text>
        <Text style={styles.detailTxt}>
          Your details have been verified successfully. Welcome to PhotoLoot
          app.
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.goButton}>
          <Text style={styles.letsGo}>Let's Go</Text>
        </TouchableOpacity>
      </View>
     </View>
  );
};
