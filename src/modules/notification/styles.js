import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Constants/Dimension';
export const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    marginTop: vh(20),
  },
  firstimage: {
    width: vw(40),
    height: vh(40),
    borderRadius: vw(6),
    marginLeft: vw(15),
  },
  new: {
    width: vw(260),
    marginLeft: vw(9),
  },
  newtext: {
    fontSize: vw(12),
  },
  timestyle: {
    alignSelf: 'flex-end',
    marginRight: vw(15),
  },
  timetext: {
    fontSize: vw(11),
  },
  line: {
    height: vh(1),
    marginTop: vh(10),
    backgroundColor: 'lightgrey',
    marginHorizontal: vh(15),
  },
});
