import {StyleSheet} from 'react-native';
import {vw, vh, color} from '../Constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    alignItems: 'center',
    width: vw(350),
    height: vh(330),
    marginHorizontal: vw(20),
    backgroundColor: color.white,
    borderRadius: vw(10),
  },
  successImage: {
    width: vw(75),
    height: vh(75),
    marginTop: vh(35),
  },
  verifyText: {
    fontSize: vw(20),
    fontWeight: 'bold',
    marginTop: vh(25),
  },
  UhOhContent: {
    fontSize: vw(14),
    textAlign: 'left',
    lineHeight: vw(22),
    width: vw(281),
    marginTop: vh(20),
  },
  detailTxt: {
    fontSize: vw(15),
    width: vw(300),
    color: color.brownishGray,
    alignSelf: 'center',
    marginTop: vh(20),
  },
  //out of votes modal container
  outOfVotesModalContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: vw(345),
    height: vh(413),
    marginHorizontal: vw(20),
    backgroundColor: color.white,
    borderRadius: vw(10),
  },
  imgContainer: {
    height: vh(156),
    width: vw(345),
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.lighYellow,
  },
  goButtonContainer: {
    marginTop: vh(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: vw(315),
  },
  waitButton: {
    borderColor: color.TAndC,
    borderWidth: vw(1),
    height: vh(45),
    width: vw(145),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(10),
  },
  waitText: {color: color.TAndC, 
    fontSize: vw(15), 
    fontWeight: '700'
  },
  goButton: {
    height: vh(45),
    width: vw(145),
    backgroundColor: color.TAndC,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(10),
    marginTop:vh(31)
  },
  letsGo: {
    color: color.white,
    fontWeight: '700',
    fontSize: vw(15),
  },
  noWorryText:{
    fontSize: vw(15),
    color: color.brownishGray,
    alignSelf: 'center',
  },
  adButton:{
    height: vh(45),
    width: vw(145),
    backgroundColor: color.TAndC,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(10),
  },
  //Congratulations
  congratulationsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  wonImage: {
    paddingHorizontal: vw(27),
    height: vh(45),
    width: vw(320),
    marginTop: vh(51),
  },
  topGraphic: {
    height: vh(60),
    width: vw(320),
    marginTop: vh(20),
  },
  uploadedPhoto: {
    position: 'absolute',
    width: vw(320),
    height: vh(315),
    borderRadius: vw(11),
    top: vh(165),
  },
  congratsSayingView: {
    backgroundColor: 'white',
    width: vw(320),
    height: vh(115),
    justifyContent: 'space-between',
    marginTop: vh(291),
    borderRadius: vw(11),
  },
  congratsInnerView: {
    flexDirection: 'row',
    marginTop: vh(31),
    justifyContent: 'space-around',
  },
  trophy: {
    width: vw(40),
    height: vw(40),
    marginLeft: vw(11),
  },
  congratsTextsView: {
    marginRight: vw(10),
    justifyContent: 'space-between',
  },
  congratulationDarkText: {
    fontSize: vw(12),
    fontWeight: '700',
  },
  wonDesc: {
    fontSize: vw(11),
    color: color.brownishGray,
  },
  rowDirectionView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: vh(8),
  },
  shareText: {
    marginLeft: vw(8),
  },
  separator: {
    width: vw(320),
    backgroundColor: color.brownishGray,
    height: vw(0.3),
  },
  prizeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: vw(74),
    height: vh(41),
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: vw(11),
    position: 'absolute',
    top: vh(141),
  },
  rankText: {
    color: color.brownishGray,
    marginLeft: vw(5),
    fontSize: vw(16),
  },
});
