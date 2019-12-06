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
    <View style={styles.congratulationsContainer}>
      <Image style={styles.wonImage} source={Images.WON} resizeMode="contain" />
      <Image
        style={styles.topGraphic}
        source={Images.TOPGRAPHIC}
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
              <Text style={styles.congratulationDarkText}>50K Votes</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.warn('Share')}
          style={styles.rowDirectionView}>
          <Image source={Images.SHARE} />
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.uploadedPhoto}
        source={{
          uri:
            'https://tse2.mm.bing.net/th?id=OIP.EaCbJ6gidUcJ-Y7-PL6pbgHaE7&pid=Api',
        }}
        resizeMode="cover"
      />
      <View style={styles.prizeView}>
        <Image source={Images.GOLDMEDAL} resizeMode="contain" />
        <Text style={styles.rankText}>1st</Text>
      </View>
    </View>
  );
};
// Out Of votes
export const OutOfVotes = props => {
  return (
    <View style={styles.container}>
      <View style={styles.outOfvoteModalContainer}>
        <View styles={styles.clapContainer}>
          <Image
            style={styles.successImage}
            source={Images.VOTESFINISHED}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.verifyText}>Uh Oh!</Text>
        <Text style={styles.outVotesText}>
          looks like you ran out of votes.
        </Text>
        <Text styles={styles.noWorriesText}>
          No worries, wait for 10m 13s to get a vote or watch 
          an ad and get all the votes right away.
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.okayButton}>
            <Text style={styles.watchAd}>I'll wait</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.goButton}>
            <Text style={styles.letsGo}>Watch Ad</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
