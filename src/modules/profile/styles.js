import { StyleSheet } from 'react-native'
import { vw, vh, color } from '../../Constants'

export const styles = StyleSheet.create({
    //Profile
    container: {
        marginTop: vh(20),
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: vw(15)
    },
    profileImgStyle: {
        width: vw(80),
        height: vw(80),
        borderRadius: vw(40),
        backgroundColor: 'blue'
    },
    editButton: {
        width: vw(26),
        height: vw(26),
        borderRadius: vw(13),
        backgroundColor: color.pale
    },
    texts: {
        width: vw(220)
    },
    editView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    //Posts
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    imgStyle: {
        width: vw(105),
        height: vw(105),
        margin: vw(10),
        borderRadius: vw(10),
    },
    //Follower
    rowContainer: { 
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:vw(15),
        marginTop:vh(16)

    },
    followerImgStyle: {
        width: vw(36),
        height: vw(36),
        borderRadius: vw(18),
        backgroundColor: 'black'
    },
    followingButton: {
        flexDirection: 'row',
        width: vw(80),
        height: vh(28),
        shadowColor: 'gray',
        borderRadius: vw(10),
        backgroundColor: 'white',
        shadowOpacity: 0.5,
        elevation: 12,
        shadowOffset: { width: 1, height: 4 },
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding:vw(8)
    },
    followingTxt: {
        fontWeight: '600',
        fontSize:vh(11)
    },
    checkImage: {
        width: vw(12),
        height: vh(12),
        marginRight:vw(7)
    },
    nameTxt:{
        fontSize:vw(14),
        fontWeight:'700',
        marginRight:vw(100)
    },
    //Edit
    editImage:{
        width: vw(80),
        height: vw(80),
        borderRadius: vw(40),
        marginBottom:vh(25)
    },
    editContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:vh(25)
    },
    editTextInput:{
        width:vw(315),
        height:vh(45),
        backgroundColor:color.whiteTwo,
        borderRadius:vw(10),
        marginTop:vh(15),
        padding:vw(10),
        fontSize:vh(15)

    },
    editTextView:{
        width:vw(315),
        height:vh(90),
        backgroundColor:color.whiteTwo,
        borderRadius:vw(10),
        marginTop:vh(15),
        padding:vw(15),
        fontSize:vh(15)
    },
    emailEmailInput:{
        
        width:vw(315),
        height:vh(45),
        backgroundColor:color.whiteTwo,
        borderRadius:vw(10),
        marginTop:vh(15),
        padding:vw(10),
        color:'gray',
        fontWeight:'700',
        fontSize:vw(15)
    },
    editCameraImage:{
        position:'absolute',
        top:vh(28)
    }
})