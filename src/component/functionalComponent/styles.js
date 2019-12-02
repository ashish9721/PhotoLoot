import {StyleSheet} from 'react-native';
import {vh,vw,color,DesignHeight,DesignWidth} from '../../Constants'
export const styles = StyleSheet.create({
    container:{
        height:vh(180),
        // flex:1,
        backgroundColor:'lightblue',
        // justifyContent:'center',
        // alignItems:'center'
        paddingHorizontal:vw(15),
       marginTop:vh(5)
    },
    imageContainer:{
        height:vh(130),
        width:vw(345),
        borderRadius:vw(10),
        backgroundColor:color.blueishGreen
    },
    icBaseContainer:{
        // position:'absolute',
        backgroundColor:'pink',
        alignItems:'center',
        // top:vh(100),
        // left:vw(50),
    },
    icBaseImage:{
        width:vh(240),
        height:vh(70),
       backgroundColor:'blue',
       position:'absolute',
       top:vh(-29)
     
        
    },
    innercontainer1:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
        // position:'absolute',
        // top:vh(18),
        // left:vw(30)
      
    },
    dollarImage:{
        height:vh(24),
        width:vh(24),
        position:'absolute',
        top:vh(18),
        left:vw(30)
    },
    textStickerContainer:{
        position:'absolute',
        top:vh(10),
        left:vw(70)

    },
    txt1:{
        fontSize:vh(15),
        fontWeight:'bold'
    },
    txt2:{
        fontSize:vh(11),
        color:color.gray,
        paddingLeft:vw(5),
        paddingTop:vh(5)
    }




    
})