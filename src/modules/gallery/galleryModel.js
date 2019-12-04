import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
//Custom Imports
import {vw, vh, color} from '../../Constants';

export const GalleryModel = props => {
  return (
    <View>
      <View style={styles.detailImage} />
      <Text>{props.votes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailImage: {
    width: vw(375),
    height: vh(375),
    backgroundColor: color.blueishGreen,
  },
  votes: {
    fontSize: vh(80),
  },
});
