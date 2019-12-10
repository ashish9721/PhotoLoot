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
    (this.height = new Animated.Value(550)), (this.width = new Animated.Value(0));
  }
 
  componentDidMount() {
    Animated.timing(
      this.width, // The animated value to drive
      {
        toValue: vw(200), // Animate to opacity: 1 (opaque)
        duration: 3000, // Make it take a while
      },
    ).start(); // Starts the animation
    Animated.timing(
      this.height, // The animated value to drive
      {
        toValue: vh(120), // Animate to opacity: 1 (opaque)
        duration: 2000, // Make it take a while
      },
    ).start(() => 
    setTimeout(() => {
      this.props.navigation.navigate('Login')
    }, 1000))
   
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
