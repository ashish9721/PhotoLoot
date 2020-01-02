import {StyleSheet,Platform} from 'react-native';
import {vh, vw, color,} from '../../Constants';
export const styles = StyleSheet.create({
  container: {
    // height:vh(190),
    // todo height:vh(205) correct viewing
    // flex:1,
    // backgroundColor:'lightblue',
    // justifyContent:'center',
    // alignItems:'center',
    marginTop: vh(25),
  },
  stickerAndImageContainer: {
    height:vh(195), 
    // flex:1,
    // backgroundColor:'lightblue',
    // justifyContent:'center',
    // alignItems:'center',
    marginVertical: vh(5),
  },
  threeStickerContainer: {
    height:vh(190),
    // todo height:vh(205) correct viewing
    // flex:1,
    // backgroundColor:'lightblue',
    // justifyContent:'center',
    // alignItems:'center',
    marginVertical: vh(5),
  },
  imageContainer: {
    height: vh(160),
    width: vw(345),
    borderRadius: vw(10),
    backgroundColor: color.blueishGreen,
  },
  icBaseContainer: {
    // position:'absolute',
    // backgroundColor:'pink',
    alignItems: 'center',
    // top:vh(100),
    // left:vw(50),
  },
  icBaseImage: {
    width: vw(266),
    height: vw(70),
    //    backgroundColor:'blue',
    position: 'absolute',
    top: vh(-29),
  },
  innercontainer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor:'red',
    // marginTop:vh(6),
    height: vw(55),
    marginHorizontal: vw(29),
    // position:'absolute',
    // top:vh(18),
    // left:vw(30)
  },
  dollarImage: {
    height: vw(24),
    width: vw(24),
    marginRight: vw(14),
  },
  textStickerContainer: {
    flexDirection: 'column',
    // backgroundColor:'pink',
    justifyContent: 'flex-start',
  },
  txt1: {
    fontSize: vw(15),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  txt2: {
    fontSize: vw(11),
    color: color.gray,
    paddingTop: vw(5),
  },
  innercontainer2: {
    // backgroundColor:'red',
    flexDirection: 'column',
    // alignItems:'flex-start',
    marginHorizontal: vw(30),
    height: vw(55),
    // marginTop:vh(5),
    justifyContent: 'center',
  },
  innerinnercontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-end',
  },
  innerinnertxt1: {
    fontSize: vw(14),
    fontWeight: 'bold',
    color: 'black',
  },
  innerinnertxt2: {color: 'gray', fontSize: vw(12)},
  smallStickerDate: {color: 'gray', fontSize: vw(12), marginTop: vw(4)},

  innerinnerImgclock: {
    height: vw(11),
    width: vw(11),
  },
  innercontainerDollar: {
    color: color.TAndC,
    fontSize: vw(12),
    fontWeight: 'bold',
  },
  innerinnerprice: {
    fontSize: vw(20),
    color: color.TAndC,
  },
  smallsticker: {
    height: vh(90),
    width: vw(95),
  },
  smallstickerImg: {
    width: vw(95),
    height: vw(95),
    backgroundColor: 'pink',
    borderRadius: vw(10),
  },
  smallstickerContainer: {
    paddingTop: vw(15),
    paddingLeft: vw(15),
    paddingRight: vw(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallstickerCard: {
    position: 'absolute',
    marginTop: vw(75),
    height: vh(30),
    width: vw(95),
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallcardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: vw(10),
    padding: vw(5),
  },
  smallcardImg: {
    width: vw(24),
    height: vw(25),
    marginRight: vw(4),
  },
  //Prize View
  // this is 1st
  mainViewStyle: {
    flexDirection: 'row',
    marginTop: vh(22),
    justifyContent: 'space-between',
  },
  // 2nd
  shadowViewStyle: {
    flexDirection: 'row',
    width: vw(105),
    height: vh(58),
    shadowColor: 'gray',
    borderRadius: vw(5),
    backgroundColor: 'white',
    shadowOpacity: 0.5,
    elevation: 12,
    shadowOffset: {width: 1, height: 4},
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  // 3rd
  prizeimgStyle: {
    width: vw(40),
    height: vw(40),
    marginRight: vw(10),
    marginLeft: vw(5)
  },
  // 4th
  grayTextStyle: {
    color: 'gray',
    fontSize: 12,
    marginRight: 5,
  },
  // 5th
  colorTextStyle: {
    color: '#66D680',
    fontWeight: 'bold',
    fontSize: vw(16),
  },
  //Description Style
  descriptionContainer: {
    marginTop: vh(28),
  },
  Heading: {
    fontSize: vw(13),
    fontWeight: '700',
    marginLeft: vw(7),
  },
  imgStyle: {
    width: vw(14),
    height: vh(16),
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rulesStyle: {
    flexDirection: 'row',
    marginTop: vh(5),
  },
  descriptionStyle: {
    color: color.brownishGray,
    marginLeft: vw(21),
    marginTop: vh(5),
    fontSize: vw(12),
    maxWidth: vw(311)
  },
  rulesRowText:{
    color: color.brownishGray,
    marginLeft: vw(21),
    marginTop: vh(5),
    fontSize: vw(12),
    maxWidth: vw(311)
  },
  //CityLights
  topView: {
    marginTop: vh(15),
    justifyContent: 'space-around',
  },
  alignView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moneyTextView: {
    flexDirection: 'row',
  },
  checkImgStyle: {
    width: vw(10),
    height: vh(9),
    marginTop: vh(8),
  },
  //Gallery
  buttonView: {
    marginTop: vh(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plusBackground: {
    backgroundColor: color.TAndC,
    width: vw(55),
    height: vh(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(10),
  },
  plusIcon: {
    width: vw(20),
    height: vw(20),
    paddingHorizontal: vw(18),
    paddingVertical: vh(12),
  },
  galleryTextColor: {
    color: color.TAndC,
    fontSize: vh(15),
    fontWeight: '600',
  },
  galleryBackground: {
    width: vw(125),
    height: vh(45),
    shadowColor: 'gray',
    borderRadius: vw(10),
    backgroundColor: 'white',
    shadowOpacity: 0.5,
    elevation: 12,
    shadowOffset: {width: 1, height: 4},
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: vh(50),
  },
  clockImage:{
    width:vw(15),
    height:vw(15),
    alignSelf:'center',
    marginRight:vw(10)
  }
});
