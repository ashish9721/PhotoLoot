import React from 'react';
import {View, Text,ScrollView} from 'react-native';
import {styles} from './styles';
import Strings from '../../Constants/Strings';
import { Header } from '../../component/headers/header';
 const  Aboutus = props=> {
    return (
      <>
      <Header
            title = "About Us"
            showBackButton={true}
            navProps={props.navigation}
            />
      <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      >
        <Text style={styles.privacyText}>{Strings.Privacy}</Text>
        <View style={styles.middleView}>
          <Text style={styles.accountText}>{Strings.Account}</Text>
          <Text style={styles.textLorem}>{Strings.AccountDesc}</Text>
          <Text style={styles.ContentText}>{Strings.Content}</Text>
          <Text style={styles.textAmet}>{Strings.ContentDesc}</Text>
        </View>
      </ScrollView>
      </>
    );
  }
export default Aboutus;