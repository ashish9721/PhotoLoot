import {StyleSheet} from 'react-native'
import { vh,vw } from '../../Constants'

export const styles = StyleSheet.create({
    imageView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'  
    },
    imageStyle:{

    },
    PhotoLootTxt:{
        color:'white',
        fontWeight:'700',
        fontSize:vw(25)
    },
    appreciationText:{
        color:'white',
        fontWeight:'700',
        fontSize:vw(17),
        marginTop:vh(12)
    }
})