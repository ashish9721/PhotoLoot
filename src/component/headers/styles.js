import {StyleSheet, Platform} from 'react-native';
import {vh, vw, DesignWidth, color} from '../../Constants';
const styles = StyleSheet.create({
  headerContainer: {
    height: Platform.OS === 'ios' ? vh(64) : vh(44),
    backgroundColor: color.TAndC,
    paddingTop: Platform.OS === 'ios' ? vh(20) : vh(0),
    width: vw(DesignWidth),
    // flexDirection:'row'
  },
  headerInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(10),
    marginTop: vh(10),
    justifyContent:'center',
    height:vh(30),
    // backgroundColor:'black'
  
  },
  backButton: {
    position:'absolute',
    left:vw(15),
    top:vh(5)
  },
  backButtonImg: {
    width: vw(20),
    height: vw(20),
  },
  title: {
    // position:'absolute',
    // top:vh(5),
    // left:vw(120),
    fontSize: vw(16),
    color: color.white,
    // alignSelf: 'center',
    fontWeight: '700',
  },
  voteButton: {
    position:'absolute',
    top:vh(3),
    left:vw(280),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: color.white,
    width: vw(80),
    height: vh(25),
    borderRadius: vw(6),
  },
  votesTxt:{
    fontSize:vw(11)
  },
  checkImage: {
    width: vw(12),
    height: vh(12),
    marginRight: vw(7),
  },
  followingTxt: {
    fontWeight: '600',
    fontSize: vh(11),
  },
  votestxt: {fontSize: vw(11), textAlign: 'left'},
  plusImg: {height: vw(13), width: vw(13), marginHorizontal: vw(5)},
});
export {styles};
