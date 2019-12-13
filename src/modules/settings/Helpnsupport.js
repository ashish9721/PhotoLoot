import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
//Custom Imports
import {styles} from './styles'
import {Header} from '../../component/headers/header'
 const HelpnSupport = (props) => {
    return (
      <>
       <Header
      title = "Help & Support"
      showBackButton={true}
      navProps={props.navigation}
      />
      <View style={styles.parentHelpnSupport}>
        <TextInput
          style={styles.name}
          placeholder="Name"
          placeholderTextColor="#A4A4A4"
        />
        <TextInput
          style={styles.email}
          placeholder="Email Address"
          placeholderTextColor="#A4A4A4"
        />
        <TextInput
          style={styles.title}
          placeholder="Title"
          placeholderTextColor="#A4A4A4"
        />
        <TextInput
          style={styles.description}
          placeholder="Description"
          placeholderTextColor="#A4A4A4"
          multiline={true}
          textAlignVertical="top"
        />
        <TouchableOpacity style={styles.Buttonsubmit}>
          <Text style={styles.submitstyle}>Submit</Text>
        </TouchableOpacity>
      </View>
      </>
    );
  }
export default HelpnSupport;
