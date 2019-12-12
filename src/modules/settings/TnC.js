import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Strings} from '../../Constants';
import {styles} from './styles';
import { Header } from '../../component/headers/header';
 const TermsAndCondition =(props) => {
    return (
      <>
      <Header
       title="Terms and Condition"
       showBackButton={true}
       navProps={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.ParentTnC}>
        <Text style={styles.termsTextTnC}>{Strings.Termsdesc}</Text>
        <Text style={styles.userTextTnC}>{Strings.Userdesc}</Text>
        <Text style={styles.userDescTnC}>{Strings.userdesc}</Text>
        <Text style={styles.ContentTnC}>{Strings.Cont}</Text>
        <Text style={styles.contDescTnC}>{Strings.Contdesc}</Text>
        <Text style={styles.condTextTnC}>{Strings.Conddesc}</Text>
        <Text style={styles.condDescText}>{Strings.Conditiondesc}</Text>
      </ScrollView>
      </>
    );
  }
export default TermsAndCondition;
