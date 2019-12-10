import {StyleSheet} from 'react-native';
import {vh, vw, DesignWidth,color} from '../../Constants';
export const styles = StyleSheet.create({
  header: {
    height: vh(64),
    width: vw(DesignWidth),
    backgroundColor: '#ff9803',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(15),
  },
  imgSearch: {
    marginTop:vh(30),
    width: vw(20),
    height: vw(20),
  },
  searchInput: {
    fontSize: vw(15),
    marginLeft: vw(10),
    width: vw(300),
    textAlign: 'left',
    height: vh(30),
    color: color.white,
    marginTop:vh(30)
  },
  recentSearch: {
    fontSize: vw(12),
    color: 'black',
    fontWeight: 'bold',
    marginLeft: vw(14),
    marginTop: vh(19),
  },
  firstView: {
    marginLeft: vw(15),
    marginTop: vh(20),
    flexDirection: 'row',
  },
  firstImage: {
    height: vw(30),
    width: vw(30),
    borderRadius: vw(7),
    backgroundColor: 'black',
  },
  text: {
    fontSize: vw(15),
    marginLeft: vw(9),
    alignSelf: 'center',
  },
  commonView: {
    marginLeft: vw(15),
    marginTop: vh(15),
    flexDirection: 'row',
  },
  image: {
    width: vw(30),
    height: vw(30),
    borderRadius: vw(15),
    backgroundColor: 'red',
  },
  commonText: {
    fontSize: vw(15),
    marginLeft: vw(10),
    alignSelf: 'center',
  },
});
