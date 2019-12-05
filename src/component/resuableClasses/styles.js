import {StyleSheet} from 'react-native'
import {vh,vw,color} from '../../Constants'

export const styles = StyleSheet.create({
    imgContainer: {
      width: vw(375),
      height: vh(192),
      position: 'absolute',
      backgroundColor:'green'
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