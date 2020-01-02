import React, {Component} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  PrizeViews,
  Description,
  Rules,
  CityLights,
  ViewGallery,
} from '../functionalComponent/functional';
//Custom Imports
import {vh, Images} from '../../Constants';
import {styles} from './styles';

// currently working
export default class ChallengesInfo extends Component {
  render() {
    return (
      <>
        <Image
          style={styles.imgContainer}
          source={Images.PLACEHOLDERIMAGE}
          resizeMode="cover"
        />
        <TouchableOpacity activeOpacity={0.9}
        onPress={()=>this.props.navigation.goBack()}
        style={styles.backButtonAbsolute}>
          <Image 
          source={Images.BACKBUTTON}
          style={styles.backButtonImage} />
        </TouchableOpacity>
        <ScrollView
          style={styles.scrollView}
          bounces={false}
          contentInset={{top: 0, right: 0, left: 0, bottom: vh(0)}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          <CityLights />
          <PrizeViews />
          <Description />
          <Rules />
          <ViewGallery prop={this.props} />
        </ScrollView>
      </>
    );
  }
}
