import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
//Custom Imports
import {Images, Strings} from '../Constants';
import {styles} from './styles';

export const VerificationModal = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.goBack()}
      activeOpacity={1}
      style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
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
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// Reset Password
export const ResetPasswordModal = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.goBack()}
      activeOpacity={1}
      style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
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
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// Congratulations

export const Congratulations = () => {
  return (
    <ImageBackground
      source={Images.DECORATION}
      resizeMode="cover"
      style={styles.congratulationsContainer}>
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
    </ImageBackground>
  );
};
// Out Of votes
export const OutOfVotes = props => {
  return (
    <TouchableOpacity
    activeOpacity={1}
    onPress={() => props.navigation.goBack()}
    style={styles.container}>
      <View style={styles.outOfVotesModalContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.successImage}
            source={Images.VOTESFINISHED}
            resizeMode="contain"
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.verifyText}>Uh Oh!</Text>
          <Text style={styles.noWorryText}>
            looks like you ran out of votes.
          </Text>
          <Text style={styles.UhOhContent}>
            No worries, wait for 10m 13s to get a vote or watch an ad and get
            all the votes right away.
          </Text>
          <View style={styles.goButtonContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.waitButton}>
              <Text style={styles.waitText}>I'll Wait</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ImageRemove')}
              style={styles.adButton}>
              <Text style={styles.letsGo}>Watch Ad</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

//Image Removed
export const ImageRemove = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.navigation.goBack()}
      style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
        <Image
          style={styles.successImage}
          source={Images.IMAGEREMOVED}
          resizeMode="contain"
        />
        <Text style={styles.verifyText}>Image Removed</Text>
        <Text style={styles.detailTxt}>
          Sorry but the Image is not available anymore as it was removed by
          owner of the image.
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.goButton}>
          <Text style={styles.letsGo}>Okay</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
// Update Available

export const UpdateAvailable = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.navigation.goBack()}
      style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
        <Image
          style={styles.successImage}
          source={Images.UPDATE}
          resizeMode="contain"
        />
        <Text style={styles.verifyText}>New Update Available</Text>
        <Text style={styles.detailTxt}>
          Update your app and explore the latest features available in Photoloot
          App.
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.waitButton}>
            <Text style={styles.waitText}>Do It Later</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.goButton}>
            <Text style={styles.letsGo}>Okay</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


