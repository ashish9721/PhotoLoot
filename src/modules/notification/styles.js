import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Constants/Dimension';
export const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    marginTop: vh(20),
  },
  notificationImage: {
    width: vw(40),
    height: vw(40),
    borderRadius: vw(20),
    marginLeft: vw(15),
    backgroundColor: 'blue',
  },
  newText: {
    fontSize: vw(12),
    width:vw(297),
    marginLeft:vw(9)
  },
  timeText: {
    fontSize: vw(11),
    alignSelf: 'flex-end',
    marginRight: vw(15),
  },
  line: {
    height: vh(1),
    marginTop: vh(10),
    backgroundColor: 'lightgrey',
    marginHorizontal: vh(15),
  },
  nameText:{
    fontWeight:'bold',
    fontSize:vw(12),
  },
  startText:{
    fontSize:vw(12),
    width:vw(260),
    marginLeft:vw(9)
  },
  Text:{
    fontSize:vw(12)
  }
});