import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import Strings from '../../Constants/Strings';
import {vw, vh} from '../../Constants/Dimension';
export default class TnC extends React.Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ParentTnC}>
        <Text style={styles.termsTextTnC}>{Strings.Termsdesc}</Text>
        <Text style={styles.userTextTnC}>{Strings.Userdesc}</Text>
        <Text style={styles.userDescTnC}>{Strings.userdesc}</Text>
        <Text style={styles.ContentTnC}>{Strings.Cont}</Text>
        <Text style={styles.contDescTnC}>{Strings.Contdesc}</Text>
        <Text style={styles.condTextTnC}>{Strings.Conddesc}</Text>
        <Text style={styles.condDescText}>{Strings.Conditiondesc}</Text>
      </ScrollView>
    );
  }
}
