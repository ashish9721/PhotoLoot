import React, {Component} from 'react';
import {
  ImageBackground,
  Animated,
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
      this.width, 
      {
        toValue: vw(200), 
        duration: 3000, 
      },
    ).start(); 
    Animated.timing(
      this.height, 
      {
        toValue: vh(150),
        duration: 2000,
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
