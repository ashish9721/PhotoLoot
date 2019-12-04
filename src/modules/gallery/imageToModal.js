import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {styles} from '../profile/styles';

export const ImageToModal = props => {
  return (
    <TouchableOpacity
    activeOpacity={1}
    onPress={()=>console.warn("Opens Modal for Image")
    }>
      <Image
        style={styles.imgStyle}
        source={{
          uri: props.item,
        }}
      />
    </TouchableOpacity>
  );
};
