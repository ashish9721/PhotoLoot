import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {Images,} from '../../Constants';
const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerInnerContainer}>
        {props.showBackButton && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => props.navProps.goBack()}>
            <Image
              source={Images.BACKBUTTON}
              style={styles.backButtonImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{props.title}</Text>
        {props.showVotebutton ? (
          <TouchableOpacity style={styles.voteButton}>
            <Image
              style={styles.plusImg}
              source={Images.HEADERPLUS}
              resizeMode="contain"
            />
            <Text style={styles.votesTxt}>
              7/15 votes
            </Text>
          </TouchableOpacity>
        ) : ( props.following &&
          <TouchableOpacity style={styles.followingButton}>
            <Image
              style={styles.checkImage}
              source={Images.FOLLOWINGCHECK}
              resizeMode="contain"
            />
            <Text style={styles.followingTxt}>Following</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export {Header};
