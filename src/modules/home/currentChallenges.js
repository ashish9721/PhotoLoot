import React, {Component} from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';
import {
  PrizeViews,
  Description,
  Rules,
  CityLights,
  ViewGallery,
} from './functional';
import {vw, vh, Images} from '../../Constants';

// currently working
export default class CurrentChallenges extends Component {
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

const styles = StyleSheet.create({
  imgContainer: {
    width: vw(375),
    height: vh(192),
    position: 'absolute',
    backgroundColor: 'green',
  },
  container: {
    paddingHorizontal: vw(15),
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: vh(186),
    // position: 'absolute',
    backgroundColor: 'white',
    borderTopLeftRadius: vw(10),
    borderTopRightRadius: vw(10),
  },
});
