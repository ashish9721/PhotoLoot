import { StyleSheet } from "react-native";
import {vh,vw,DesignHeight,DesignWidth} from '../../Constants/Dimension'
import {color} from '../../Constants/colors'
export const styles =StyleSheet.create({
SignUpContainer:{
    flex:1,
    justifyContent:'center',
    backgroundColor:color.white,
    alignItems:'center'
},
screenImg:{
    height:vh(125),
    width:vw(125),
    backgroundColor:color.gray
},
screenTxtContainer:{
    
    width:vw(315),
    marginTop:vh(30),
    marginBottom:vh(10),
    justifyContent:'center',
    alignItems:'flex-start',

},
screenTxt:{
    fontSize:vw(25),
    fontWeight:'bold',
    color:'black',
    alignSelf:'flex-start'
},
InputFieldContainer:{
    alignItems:'center',
    
},
inputTextField2Container:{
    marginTop:vh(15),
    borderRadius:10,
    backgroundColor:color.inputTextField,
    height:vh(45),
    width:vw(315),
    flexDirection:'row',
    paddingHorizontal:vw(15),
    justifyContent:'space-between',
    alignItems:'center'
},
inputTextField2:{
    fontSize:vh(15),
    fontWeight:'bold',
    textAlign:'left',
    marginRight:vw(5),
    width:vw(250)
},
inputTextField2Img:{
    height:vh(20),
    width:vh(28),
    backgroundColor:color.yellow
},
checkBoxAndClickableLink:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:vh(30),
    width:vw(315)

},
checkBoxImg:{
    height:vh(20),
    width:vh(20),
    // todo remove
    backgroundColor:color.lGreen,
    marginRight:vw(10)
},
clickableLinkTxt:{
    fontSize:vw(12),
    textAlign:'left', 
    
 
},
submitBtn:{
    backgroundColor:color.TAndC,
    height:vh(45),
    width:vw(315),
    borderRadius:vh(10),
    shadowOffset:{height:vh(8),width:vw(1)},
    shadowColor:color.TAndC,
    shadowOpacity:0.4,
    marginTop:vh(30),
    justifyContent:'center',
    alignItems:'center'
},
TAndC:{
    fontSize:vw(12),
    textAlign:'left', 
    color:color.TAndC
},
submitTxt:{
    fontSize:vw(15),
    fontWeight:'bold',
    color:color.white
},
clickableLinkContVerification:{
    alignItems:'center',
    marginTop:vh(50)
},
verifyTxt:{
    width:vw(315),
    marginTop:vh(10),
    marginBottom:vh(12),
},
createAccountContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

},
createAccountUserImgContainerout:{
    marginTop:vh(30),
    marginBottom:vh(15),
    borderRadius:vw(50),
    borderColor:color.TAndC,
    borderWidth:2,
    padding:vw(2),
    justifyContent:'center',
    alignItems:'center',
    
},
userImgOuterContainer:{
    height:vh(85),
    width:vw(85),
    backgroundColor:'gray',
    borderRadius:vw(50),
}

})