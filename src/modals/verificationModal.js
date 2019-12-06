import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
//Custom Imports
import {Images, Strings} from '../Constants';
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
        <Text style={styles.detailTxt}>{Strings.VERIFYTEXT}</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.goButton}>
          <Text style={styles.letsGo}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Reset Password
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

// Congratulations

export const Congratulations = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.wonImage} source={Images.WON} resizeMode="contain" />
      <Image
        style={styles.topGraphic}
        source={Images.TPOGRAPHIC}
        resizeMode="contain"
      />
      <Image
        style={styles.uploadedPhoto}
        source={{
          uri:
            'https://tse2.mm.bing.net/th?id=OIP.EaCbJ6gidUcJ-Y7-PL6pbgHaE7&pid=Api',
        }}
        resizeMode="cover"
      />
      <View style={styles.congratsSayingView}>
        <View style={styles.congratsInnerView}>
          <Image
            style={styles.trophy}
            source={Images.TROPHY}
            resizeMode="contain"
          />
          <View style={styles.congratsTextsView}>
            <Text style={styles.congratulationDarkText}>Congratulations</Text>
            <View style={styles.rowDirectionView}>
              <Text style={styles.wonDesc}>
                You won "Road Less Travelled" by{' '}
              </Text>
              <Text style={styles.congratulationDarkText}>50 K Votes</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowDirectionView}>
          <Image source={Images.SHARE} />
          <Text>Share</Text>
        </View>
      </View>
    </View>
  );
};
