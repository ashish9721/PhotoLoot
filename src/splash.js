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

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    height: new Animated.Value(600), // Initial value for opacity: 0
    width: new Animated.Value(360), // Initial value for opacity: 0
  };
  componentDidMount() {
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 360, // Animate to opacity: 1 (opaque)
        duration: 450, // Make it take a while
      },
    ).start(); // Starts the animation
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 750, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      },
    ).start(); // Starts the animation
    this.props.navigation.navigate('Login')
  }
  render() {
    let {height} = this.state;
    let {width} = this.state;
    return (
      <ImageBackground
        style={styles.imageView}
        source={Images.SPLASHBACKGROUND}
        resizeMode="cover">
        <Animated.Image
          style={[
            {
              width: width,
              height: height,
            },
          ]}
          source={Images.APPICON}
          resizeMode="contain"
        />
        {/* <Text style={styles.PhotoLootTxt}>{Strings.PhotoLoot}</Text> */}
        <Animated.Text style={[styles.appreciationText]}>
          {Strings.appreciation}
        </Animated.Text>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {},
  PhotoLootTxt: {
    color: 'white',
    fontWeight: '700',
    fontSize: vw(25),
  },
  appreciationText: {
    color: 'white',
    fontWeight: '700',
    fontSize: vw(17),
    marginTop: vh(50),
  },
});
