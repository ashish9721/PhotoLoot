import {StyleSheet,Platform} from 'react-native';
import { vw, DesignWidth, vh, color } from '../../Constants';
// 
export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        height:vh(600)   // todo need to check 
        ,justifyContent:'center',
        marginVertical:vh(10)
    },
    headerView:{
        width:vw(DesignWidth),
        height:  Platform.OS === 'ios' ? vh(64) : vh(44),
        backgroundColor:color.TAndC
    },
    bottomTabImg:{
        height:vw(40),
        width:vw(40),
        marginTop:vh(15)
    },
    scrollViewStyle:{
        
    }
})