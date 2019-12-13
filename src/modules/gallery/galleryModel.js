import React from 'react';
import {Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
//Custom Imports
import { Images} from '../../Constants';
import {styles} from './styles'

export const GalleryModel = props => {
  return (
    <>
      <Image style={styles.detailImage}
      source={{uri:props.image}}resizeMode="stretch" />
      <View style={styles.detailImageBg}>
        <Image
          style={styles.detailBImage}
          source={Images.UNSELECTEDB}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detailClapBg}>
        <Image
          style={styles.detailBImage}
          source={Images.UNSELECTEDCLAP}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.votes}>{props.votes}</Text>
        <View style={styles.detailProfileView}>
          <View style={styles.detailImageProfile} />
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <Text style={styles.desc}>{props.desc}</Text>
        <Text style={styles.tags}>{props.tags}</Text>
      </View>
      <View style={styles.reportShareView}>
        <TouchableOpacity style={styles.reportButton}>
          <Image source={Images.REPORT} resizeMode="contain" />
          <Text style={styles.report}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reportButton}>
          <Image source={Images.SHARE} resizeMode="contain" />
          <Text style={styles.report}>Share</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

