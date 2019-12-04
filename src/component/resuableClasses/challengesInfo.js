import React, {Component} from 'react';
import {Image, ScrollView} from 'react-native';
import {
  PrizeViews,
  Description,
  Rules,
  CityLights,
  ViewGallery,
} from '../functionalComponent/functional';
//Custom Imports
import {vw, vh, Images} from '../../Constants';
import {styles} from './styles'

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
