import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';

//Custom Import
import {Images, Strings, vh, vw} from './Constants';
import {styles} from './styles';
export default class Splash extends Component {
  constructor(props) {
    super(props);
    (this.height = new Animated.Value(0)), (this.width = new Animated.Value(0));
  }
  // state = {
  //   height: new Animated.Value(0), // Initial value for opacity: 0
  //   width: new Animated.Value(0), // Initial value for opacity: 0
  // };
  componentDidMount() {
    Animated.timing(
      this.width, // The animated value to drive
      {
        toValue: vw(360), // Animate to opacity: 1 (opaque)
        duration: 3000, // Make it take a while
      },
    ).start(); // Starts the animation
    Animated.timing(
      this.height, // The animated value to drive
      {
        toValue: vh(550), // Animate to opacity: 1 (opaque)
        duration: 3000, // Make it take a while
      },
    ).start(() => this.props.navigation.navigate('Login'));
  }
  render() {
    return (
      <ImageBackground
        style={styles.imageView}
        source={Images.SPLASHBACKGROUND}
        resizeMode="cover">
        <Animated.Image
          style={[
            {
              width: this.width,
              height: this.height,
            },
          ]}
          source={Images.APPICON}
          resizeMode="contain"
        />
        {/* <Text style={styles.PhotoLootTxt}>{Strings.PhotoLoot}</Text> */}
        <Animated.Text style={styles.appreciationText}>
          {Strings.appreciation}
        </Animated.Text>
      </ImageBackground>
    );
  }
}
