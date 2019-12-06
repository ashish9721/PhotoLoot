import React, {Component} from 'react';
import {Image, ImageBackground, Text, Animated,StyleSheet} from 'react-native';

//Custom Import
import {Images, Strings,vh,vw} from './Constants';

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
        duration: 3000,
      },
    ).start(()=>{this.props.navigation.navigate('Login')});



  }
  render() {
    return (
      <ImageBackground
        style={styles.imageView}
        source={Images.SPLASHBACKGROUND}
        resizeMode="cover">
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
 const styles = StyleSheet.create({
    imageView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'  
    },
    imageStyle:{

    },
    PhotoLootTxt:{
        color:'white',
        fontWeight:'700',
        fontSize:vw(25)
    },
    appreciationText:{
        color:'white',
        fontWeight:'700',
        fontSize:vw(17),
        marginTop:vh(12)
    }
})