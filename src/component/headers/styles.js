import {StyleSheet,Platform} from 'react-native';
import {vh,vw,DesignWidth,color} from '../../Constants'
const styles = StyleSheet.create({
    headerContainer:{
        height: Platform.OS === 'ios'?  vh(64): vh(44),
        backgroundColor:color.TAndC,
        paddingTop:Platform.OS==='ios'? vh(20) : vh(0),
        width:vw(DesignWidth),
    },
    headerInnerContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:vw(15),
        justifyContent:'space-between',
        marginTop:vh(20)
    },
    backButton:{
        alignSelf:'flex-start'
    },
    backButtonImg:{
        width:vw(20),
        height:vw(20)
    },
    title:{
        fontSize:vw(16),
        color:color.white,
        alignSelf:'center',
        fontWeight:'700'
    },
    voteButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
    },
    checkImage: {
        width: vw(12),
        height: vh(12),
        marginRight:vw(7)
    },
    followingTxt: {
        fontWeight: '600',
        fontSize:vh(11)
    },
    votestxt:{fontSize: vw(11), textAlign: 'left'},
    plusImg:{height: vw(13), width: vw(13)},
})
export {styles}