import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
//Custom Imports
import {vw, vh, color, Images, DesignWidth} from '../../Constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

const styles = StyleSheet.create({
  detailContainer: {
    paddingHorizontal: vw(15),
  },
  detailImage: {
    width: vw(375),
    height: vh(375),
    backgroundColor: color.blueishGreen,
  },
  votes: {
    fontSize: vw(15),
    fontWeight: '700',
    marginTop: vh(15),
  },
  name: {
    fontSize: vw(14),
    fontWeight: '500',
    marginLeft: vw(8),
  },
  desc: {
    fontSize: vw(12),
    marginTop: vh(10),
  },
  tags: {
    fontSize: vw(12),
    fontWeight: '700',
    marginTop: vh(12),
  },
  detailProfileView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(15),
  },
  detailImageProfile: {
    width: vw(30),
    height: vw(30),
    borderRadius: vw(15),
    backgroundColor: 'green',
  },
  detailImageBg: {
    position: 'absolute',
    top: vh(350),
    left: vw(233),
    width: vw(56),
    height: vw(56),
    borderRadius: vw(28),
  },
  detailBImage: {
    width: vw(55),
    height: vh(56),
  },
  detailClapBg: {
    position: 'absolute',
    top: vh(350),
    left: vw(304),
    width: vw(56),
    height: vw(56),
    borderRadius: vw(28),
  },
  reportShareView: {
    flexDirection: 'row',
    width: vw(DesignWidth),
    height: vh(37),
    borderWidth: vw(0.3),
    borderColor: color.gray,
    marginBottom: vh(26),
    marginTop: vh(25),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  report: {
    fontSize: vw(13),
    marginLeft: vw(8),
  },
});
