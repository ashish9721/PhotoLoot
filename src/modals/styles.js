import {StyleSheet} from 'react-native';
import {vw, vh, color} from '../Constants';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width:vw(330),
    height:vh(330),
    marginHorizontal:vw(20),
    backgroundColor:color.white,
    borderRadius:vw(10),
    
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
});
