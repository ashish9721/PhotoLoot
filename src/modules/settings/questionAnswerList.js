import React, {Component} from 'react';
import {Text, View, Animated, TouchableOpacity, Easing} from 'react-native';

//Custom Imports
import {Images, vh} from '../../Constants';
import {styles} from './styles';

export default class QuestionAnswerList extends Component {
  state = {toggle: false, showAnswer: false,showHeight:false};
  constructor(props) {
    super(props);
    this.rotation = new Animated.Value(0);
    this.height = new Animated.Value(0);
    (this.startDeg = '0deg'), (this.endDeg = '45deg');
    this.minHeight = vh(0) , this.maxHeight = vh(200);
    
  }

  StartImageRotateFunction() {

    Animated.parallel[Animated.timing(this.rotation, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      this.rotation = new Animated.Value(0);
      if(this.startDeg=="0deg")
      {this.startDeg = '45deg'
       this.endDeg = '0deg'
      }
      else{
        this.startDeg = '0deg'
       this.endDeg = '45deg'

      }

    }),
    Animated.timing(this.height, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start(()=>{
      this.height = new Animated.Value(0)
      if(this.showAnswer){
        this.minHeight = vh(200),
        this.maxHeight = vh(0)
      }else{
        this.minHeight = vh(0),
        this.maxHeight = vh(200)
      }
    })]
  }
  render() {
    const rotateImage = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.startDeg, this.endDeg],
      extrapolate: 'clamp',
    });
    const manageHeight = this.height.interpolate({
      inputRange: [0, 1],
      outputRange: [this.minHeight, this.maxHeight],
      extrapolate: 'clamp',
    });
    return (
      <>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>{this.props.item.que}</Text>

          <TouchableOpacity
            onPress={() =>
              this.setState(
                {
                  toggle: !this.state.toggle,
                  showAnswer: !this.state.showAnswer,
                },
                () => {
                  this.StartImageRotateFunction();
                },
              )
            }
            style={styles.questionToggleButton}>
            <Animated.Image
              style={{transform: [{rotate: rotateImage}]}}
              source={Images.OPENQUESTION}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {this.state.showAnswer && (
          <Animated.View style={[styles.FaqAnswerView,{maxHeight:manageHeight}]}>
            <Text> {this.props.item.answer}</Text>
          </Animated.View>
        )}
      </>
    );
  }
}
