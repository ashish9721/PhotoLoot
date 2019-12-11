import React, {Component} from 'react';
import {Text, View,Animated,TouchableOpacity,Easing} from 'react-native';

//Custom Imports
import {Images,vh} from '../../Constants'
import {styles} from './styles';

export default class QuestionAnswerList extends Component {
  constructor(props) {
    super(props)
    this.toggle = new Animated.Value(0);
    this.height = new Animated.Value(0);
  }

  StartImageRotateFunction() {
    Animated.timing(this.toggle, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
    }).start();
    Animated.timing(this.height, {
      toValue: 1,
      duration: 250, 
      easing: Easing.linear,
    }).start();
  }
  render() {
    const rotateImage = this.toggle.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
      extrapolate: 'clamp',
    });
    const manageHeight = this.height.interpolate({
      inputRange: [0, 1],
      outputRange: [vh(0), vh(100)],
      extrapolate: 'clamp',
    });
    return (
      <>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>{this.props.item.que}</Text>

          <TouchableOpacity
            onPress={() =>
              this.StartImageRotateFunction()
            }
            style={styles.questionToggleButton}>
            <Animated.Image
              style={{transform: [{rotate: rotateImage}]}}
              source={Images.OPENQUESTION}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Animated.View style={[styles.FaqAnswerView, {height: manageHeight}]}>
          <Text>{this.props.item.answer}</Text>
        </Animated.View>
      </>
    );
  }
}
