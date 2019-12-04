import React, {Component} from 'react';
import {Image, ImageBackground, Text, Animated} from 'react-native';

//Custom Import
import {styles} from './styles';
import {Images, Strings} from '../../Constants';

export default class Splash extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.timing(
      // Animate value over time
      this.state.fadeAnim, // The value to drive
      {
        toValue: 1, // Animate to final value of 1
        duration: 1000,
      },
    ).start();
  }
  render() {
    return (
      <ImageBackground
        style={styles.imageView}
        source={Images.SPLASHBACKGROUND}
        resizeMode="contain">
        <Animated.View
          style={[styles.imageView, {opacity: this.state.fadeAnim}]}>
          <Image source={Images.APPICON} resizeMode="contain" />
          <Text style={styles.PhotoLootTxt}>{Strings.PhotoLoot}</Text>
          <Text style={styles.appreciationText}>{Strings.appreciation}</Text>
        </Animated.View>
      </ImageBackground>
    );
  }
}
