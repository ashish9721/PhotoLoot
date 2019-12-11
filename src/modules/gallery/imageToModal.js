import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {styles} from '../profile/styles';
import {Images} from '../../Constants';

export const ImageToModal = props => {
  const  [getloaded, setLoaded] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        console.warn(getloaded);
      }}>
     
        <Image
          onLoad={()=>{
            setLoaded(true)
          }}
          style={styles.imgStyle}
          
          source={{
            uri: props.item,
          }}
        />
        {
          !getloaded&&<Image source={Images.LOGOORANGE} style={[styles.imgStyle]}/>
        }
       
    </TouchableOpacity>
  );
};
