import {StyleSheet} from 'react-native'
import {vh,vw,} from '../../Constants'

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
      backgroundColor: 'white',
      borderTopLeftRadius: vw(10),
      borderTopRightRadius: vw(10),
    },
    backButtonAbsolute:{
      position:'absolute',
      top:vh(25),
      left:vw(15),
    }
  });