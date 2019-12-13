import {StyleSheet} from 'react-native'
//Custom Imports
import {vh,vw,color,DesignWidth} from '../../Constants'
// Gallery modal
export const styles = StyleSheet.create({
    detailContainer: {
      paddingHorizontal: vw(15),
    },
    detailImage: {
      width: vw(375),
      height: vh(305),
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
      top: vh(280),
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
      top: vh(280),
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
  