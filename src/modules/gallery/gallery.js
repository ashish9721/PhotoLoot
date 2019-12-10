import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// Custom Imports
import {styles} from '../profile/styles';
import {ImageToModal} from './imageToModal';

export const Gallery = props => {
  const {imageTempData} = useSelector(store => store.galleryReducer);
  const dispatch = useDispatch();

  
  return (
    <View style={styles.viewStyle}>
      <FlatList
        numColumns={3}
        bounces={false}
        data={imageTempData}
        style={styles.flatStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString}
        renderItem={({item}) => <ImageToModal 
        navigate={props.navigation.navigate}
        item={item.key} />}
      />
    </View>
  );
};

