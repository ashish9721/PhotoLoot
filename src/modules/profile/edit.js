import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
//Custom Imports
import {Images} from '../../Constants';
import {styles} from './styles';

// Get name email username bio from redux in text input
export const Edit = () => {
  return (
    <View style={styles.editContainer}>
      <Image
        style={styles.editImage}
        source={Images.TRANSCAMERA}
        resizeMode="contain"
      />
      <TextInput style={styles.editTextInput} placeholder="Name" />
      <TextInput style={styles.editTextInput} placeholder="Username" />
      <TextInput
        style={styles.editTextView}
        multiline={true}
        placeholder="Bio"
      />
      <TextInput value="email" style={styles.emailEmailInput} />
    </View>
  );
};
