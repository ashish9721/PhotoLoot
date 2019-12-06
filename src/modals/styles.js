import {StyleSheet} from 'react-native';
import {vw, vh, color} from '../Constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: vw(330),
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
  detailTxt: {
    fontSize: vw(15),
    width: vw(300),
    color: color.brownishGray,
    alignSelf: 'center',
    marginTop: vh(20),
  },
  goButton: {
    height: vh(45),
    width: vw(145),
    backgroundColor: color.TAndC,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(10),
    marginTop: vh(40),
  },
  letsGo: {
    color: color.white,
    fontWeight: '700',
    fontSize: vw(15),
  },
  //Congratulations
  wonImage: {
    marginTop:vh(30),
    paddingHorizontal:vw(27),
    height:vh(45),
    width:vw(320)
  },
  topGraphic:{
    height:vh(60),
    width:vw(320),
    marginTop:vh(20)
  },
  uploadedPhoto:{
    position:'absolute',
    width:vw(320),
    height:vh(315),
    borderRadius:vw(11),
    
  },
  congratsSayingView:{
    backgroundColor:"white",
    width:vw(320),
    height:vh(115),
    justifyContent:'space-between',
  },
  congratsInnerView:{
    flexDirection:'row',
    marginTop:vh(21),
    justifyContent:'space-around'
  },
  trophy:{
    width:vw(40),
    height:vw(40),
    marginLeft:vw(11)
  },
  congratsTextsView:{
    marginRight:vw(10),
    justifyContent:'space-around'
  },
  congratulationDarkText:{
    fontSize:vw(12),
    fontWeight:'700'
  },
  wonDesc:{
    fontSize:vw(11),
    color:color.brownishGray,
  },
  rowDirectionView:{
    flexDirection:'row',
    alignSelf:'center'
  }
  
});
